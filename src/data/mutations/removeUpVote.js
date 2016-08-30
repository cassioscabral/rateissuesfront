import StoriesItemType from '../types/StoriesItemType'
import UpVoteInputItemType from '../types/UpVoteInputItemType'
import {Story, User, UpVote} from '../models'

const removeUpVote = {
  name: 'removeUpVote',
  type: StoriesItemType,
  args: {
    story: {type: UpVoteInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    await UpVote.destroy({where: {userId, storyId}})
    let result = await Story.findById(storyId, {
      include: [{
        model: User,
        as: 'user'
      },{
        model: UpVote,
        as: 'upvotes'
      }]
    })
    return result
  }
}

export default removeUpVote
