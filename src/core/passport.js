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
// import {User, UserLogin, UserClaim, UserProfile} from '../data/models'
import env from '../env'

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
}, (req, accessToken, refreshToken, profile, done) => done(null, profile)
// {
  // console.log('profile', profile)
  // /* eslint-disable no-underscore-dangle */
  // const loginName = 'auth0'
  // const claimType = 'urn:auth0:github'
  // const fooBar = async () => {
  //   if (req.user) {
  //     const userLogin = await UserLogin.findOne({
  //       attributes: ['name', 'key'],
  //       where: {name: loginName, key: profile.id}
  //     })
  //     if (userLogin) {
  //       // There is already a Facebook account that belongs to you.
  //       // Sign in with that account or delete it, then link it with your current account.
  //       done()
  //     } else {
  //       const user = await User.create({
  //         id: req.user.id,
  //         email: profile._json.email,
  //         logins: [
  //           {name: loginName, key: profile.id}
  //         ],
  //         claims: [
  //           {type: claimType, value: profile.id}
  //         ],
  //         profile: {
  //           displayName: profile.nickname,
  //           // gender: profile._json.gender,
  //           picture: profile.picture
  //         }
  //       }, {
  //         include: [
  //           {model: UserLogin, as: 'logins'},
  //           {model: UserClaim, as: 'claims'},
  //           {model: UserProfile, as: 'profile'}
  //         ]
  //       })
  //       done(null, {
  //         id: user.id,
  //         email: user.email
  //       })
  //     }
  //   } else {
  //     const users = await User.findAll({
  //       attributes: ['id', 'email'],
  //       where: {'$logins.name$': loginName, '$logins.key$': profile.id},
  //       include: [
  //         {
  //           attributes: ['name', 'key'],
  //           model: UserLogin,
  //           as: 'logins',
  //           required: true
  //         }
  //       ]
  //     })
  //     if (users.length) {
  //       done(null, users[0])
  //     } else {
  //       let user = await User.findOne({where: {email: profile._json.email}})
  //       if (user) {
  //         // There is already an account using this email address. Sign in to
  //         // that account and link it with Facebook manually from Account Settings.
  //         done(null)
  //       } else {
  //         user = await User.create({
  //           email: profile._json.email,
  //           emailVerified: true,
  //           logins: [
  //             {name: loginName, key: profile.id}
  //           ],
  //           claims: [
  //             {type: claimType, value: accessToken}
  //           ],
  //           profile: {
  //             displaynName: profile.displayName,
  //             gender: profile._json.gender,
  //             picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
  //           }
  //         }, {
  //           include: [
  //             {model: UserLogin, as: 'logins'},
  //             {model: UserClaim, as: 'claims'},
  //             {model: UserProfile, as: 'profile'}
  //           ]
  //         })
  //         done(null, {
  //           id: user.id,
  //           email: user.email
  //         })
  //       }
  //     }
  //   }
  // }
  //
  // fooBar().catch(done)
  // return done(null, profile)
// }
))

export default passport
