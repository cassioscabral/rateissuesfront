import {GraphQLList as List} from 'graphql'
import StoriesItemType from '../types/StoriesItemType'

import {Story, User, UserLogin, UserClaim, UserProfile} from '../models'

let items = [
  {id:'01',body:'https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3#.z2x12e8p6',publishedDate: new Date()},
  {id:'02',body:'http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository',publishedDate: new Date()},
  {id:'03',body:'https://github.com/cassioscabral/rateissuesfront/issues/1',publishedDate: new Date()},
  {id:'04',body:'https://www.quora.com/Which-programming-language-has-the-best-career-salary-opportunities-over-the-next-decade',publishedDate: new Date()},
  {id:'05',body:'New version is ready!',publishedDate: new Date()},
  {id:'06',body:'https://www.youtube.com/watch?v=KYzlpRvWZ6c&',publishedDate: new Date()},
  {id:'07',body:'https://twitter.com/dan_abramov/status/738286536161136644',publishedDate: new Date()}
]

const seed = async () => {
  const loginName = 'auth0'
  const claimType = 'urn:auth0:github'

  const stories = await Story.all()
  if (stories.length < 1){

    const user = User.create({
      id: 'rateissues|0001',
      email: 'admin@rateissues.com.br',
      emailVerified: true,
      displayName: 'Admin',
      picture: '',
      logins: [
        {name: loginName, key: 'rateissues|0001'}
      ],
      claims: [
        {type: claimType, value: 'rateissues|0001'}
      ],
      profile: {
        displayName: 'Admin',
        picture: '',
        accessToken: '',
        clientID: ''
      }
    }, {
      include: [
        {model: UserLogin, as: 'logins'},
        {model: UserClaim, as: 'claims'},
        {model: UserProfile, as: 'profile'}
      ]
    })

    for (let i = 0; i < items.length; i++) {
      Story.create({body: items[i].body,userId:user.id})
    }
  }
}
seed()

const stories = {
  type: new List(StoriesItemType),
  async resolve () {
      return await Story.findAll({
        order: 'publishedDate DESC',
        include: [{
          model: User,
          as: 'user'
        }]
      })

  }
}

export default stories
