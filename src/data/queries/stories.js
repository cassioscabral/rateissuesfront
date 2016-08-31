import {GraphQLList as List} from 'graphql'
import StoriesItemType from '../types/StoriesItemType'
import {
  Story,
  User
} from '../db'

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
  const stories = await Story.findAll()

  if(stories.length < 1){
    const user = await User.create('rateissues|0001', 'admin@rateissues.com.br', 'Admin')
    let result = []
    let upvote = [{userId: user.id, creationDate: new Date()}]
    for (let i = 0; i < items.length; i++) {
      let story = await Story.create(items[i].body, user.id, upvote)
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
