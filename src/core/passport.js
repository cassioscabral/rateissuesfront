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
    logins: [
      {name: loginName, key: profile.id}
    ],
    claims: [
        {type: claimType, value: profile.id}
    ],
    profile: {
      displayName: profile.nickname,
      // gender: profile._json.gender,
      picture: profile.picture
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
  callbackURL: 'http://localhost:3001/login/auth0/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const fooBar = async () => {
    let user = null
    let userToken = {
      id: '',
      email: ''
    }
    // get from jwt cookie's token
    if (req.user) {
      user = await User.findOne({where: {id: req.user.id}})

      // if user is already in DB
      // keep it as token
      if (user) {
        userToken = {
          id: req.user.id,
          email: req.user.email
        }
      } else {
        await createUser(profile)
        userToken.id = profile.id
        userToken.email = profile._json.email
      }
    } else {
      // search by email
      user = await User.findOne({where: {email: profile._json.email}})
      if (user) {
        userToken.id = user.dataValues.id
        userToken.email = user.dataValues.email
      } else {
        await createUser(profile)
        userToken.id = profile.id
        userToken.email = profile._json.email
      }
    }
    done(null, userToken)
  }
  fooBar().catch(done)
}))

export default passport
