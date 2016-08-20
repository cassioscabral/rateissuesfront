import {User, UserLogin, UserClaim, UserProfile} from '../models'

const loginName = 'auth0'
const claimType = 'urn:auth0:github'

async function create (id, email, displayName, picture='', accessToken='', clientID='') {
  return await await User.create({
    id,
    email,
    emailVerified: true,
    displayName,
    picture,
    logins: [
      {name: loginName, key: id}
    ],
    claims: [
      {type: claimType, value: id}
    ],
    profile: {
      displayName,
      picture,
      accessToken,
      clientID
    }
  }, {
    include: [
      {model: UserLogin, as: 'logins'},
      {model: UserClaim, as: 'claims'},
      {model: UserProfile, as: 'profile'}
    ]
  })
}

export default {
  loginName,
  claimType,
  create
}
