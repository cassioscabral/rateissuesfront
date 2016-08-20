import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'
import {Story, User, Ranking} from '../models'

const addRanking = {
  name: 'addRanking',
  type: StoriesItemType,
  args: {
    story: {type: StoriesInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    let user = await User.findById(userId)
    if (user){
      let ranking = await Ranking.findOne({where: {userId, storyId}})
      if (! ranking){
        Ranking.create({userId, storyId, creationDate: new Date()})
      }
      let result = await Story.findById(storyId, {
        include: [{
          model: User,
          as: 'user'
        },{
          model: Ranking,
          as: 'rankings'
        }]
      })
      return result
    }else{
      throw 'Invalid user!'
    }
  }
}

export default addRanking
