import StoriesItemType from '../types/StoriesItemType'
import RankingInputItemType from '../types/RankingInputItemType'
import {Story, User, Ranking} from '../models'

const removeRanking = {
  name: 'removeRanking',
  type: StoriesItemType,
  args: {
    story: {type: RankingInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    await Ranking.destroy({where: {userId, storyId}})
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

export default removeRanking
