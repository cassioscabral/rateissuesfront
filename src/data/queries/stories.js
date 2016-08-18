import {GraphQLList as List} from 'graphql'
import StoriesItemType from '../types/StoriesItemType'

import {Story, User, UserLogin, UserClaim, UserProfile, Ranking} from '../models'

let items = [
  {body:'https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3#.z2x12e8p6'},
  {body:'http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository'},
  {body:'https://github.com/cassioscabral/rateissuesfront/issues/1'},
  {body:'https://www.quora.com/Which-programming-language-has-the-best-career-salary-opportunities-over-the-next-decade'},
  {body:'New version is ready!'},
  {body:'https://www.youtube.com/watch?v=KYzlpRvWZ6c&'},
  {body:'https://twitter.com/dan_abramov/status/738286536161136644'}
]

const seed = async () => {
  const stories = await Story.findAll({
    order: 'publishedDate DESC',
    include: [{
      model: User,
      as: 'user'
    },{
      model: Ranking,
      as: 'rankings'
    }]
  })
  if(stories.length < 1){
    const loginName = 'auth0'
    const claimType = 'urn:auth0:github'

    const user = await User.create({
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
    let result = []
    for (let i = 0; i < items.length; i++) {
      let story = await Story.create({body: items[i].body, publishedDate:new Date(),userId:user.id, rankings:[{userId: user.id}]},
      {include: [{model: Ranking, as: 'rankings'}]})
      result.push(story)
    }
    return result
  }else{
    return stories
  }
}

const stories = {
  type: new List(StoriesItemType),
  async resolve () {
    return await seed()
  }
}

export default stories
