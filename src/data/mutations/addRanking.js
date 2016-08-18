import StoriesItemType from '../types/StoriesItemType'
import RankingInputItemType from '../types/RankingInputItemType'
import {Story, User, Ranking} from '../models'

const addRanking = {
  name: 'addRanking',
  type: StoriesItemType,
  args: {
    story: {type: RankingInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    let ranking = await Ranking.findOne({where: {userId, storyId}})
    if (! ranking){
      Ranking.create({userId, storyId})
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
  }
}

export default addRanking
