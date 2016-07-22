/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import passport from 'passport'
import Auth0Strategy from 'passport-auth0'
import {User, UserLogin, UserClaim, UserProfile} from '../data/models'
import env from '../env'

const loginName = 'auth0'
const claimType = 'urn:auth0:github'

const createUser = (profile) => {
  User.create({
    id: profile.id,
    email: profile._json.email,
    emailVerified: true,
    displayName: profile.nickname,
    picture: profile.picture,
    logins: [
      {name: loginName, key: profile.id}
    ],
    claims: [
        {type: claimType, value: profile.id}
    ],
    profile: {
      displayName: profile.nickname,
      // gender: profile._json.gender,
      picture: profile.picture,
      accessToken: profile.identities[0].access_token,
      clientID: profile._json.clientID
    }
  }, {
    include: [
      {model: UserLogin, as: 'logins'},
      {model: UserClaim, as: 'claims'},
      {model: UserProfile, as: 'profile'}
    ]
  })
}

/**
 * Sign in with auth0.
 */
passport.use(new Auth0Strategy({
  domain: env.auth0.CLIENT_DOMAIN,
  clientID: env.auth0.CLIENT_ID,
  clientSecret: env.auth0.CLIENT_SECRET,
  callbackURL: '/login/auth0/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const authenticate = async () => {
    let user = null
    let userToken = {}

    // req.user recived from jwt cookie's token
    if (req.user) {
      user = await UserLogin.findOne({
        attributes: ['name', 'key'],
        where: {name: loginName, key: req.user.id}
      })
    } else {
      // search by email
      user = await User.findOne({where: {email: profile._json.email}})
    }

    if (!user) {
      createUser(profile)
    }

    userToken.id = profile.id
    userToken.email = profile._json.email
    userToken.displayName = profile.nickname
    userToken.picture = profile.picture

    done(null, userToken)
  }
  authenticate().catch(done)
}))

export default passport
