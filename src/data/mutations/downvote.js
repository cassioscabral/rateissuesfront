import StoriesItemType from '../types/StoriesItemType'
import UpvoteInputItemType from '../types/UpvoteInputItemType'
import {Story, User, Upvote} from '../models'

const removeUpvote = {
  name: 'removeUpvote',
  type: StoriesItemType,
  args: {
    story: {type: UpvoteInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    await Upvote.destroy({where: {userId, storyId}})
    let result = await Story.findById(storyId, {
      include: [{
        model: User,
        as: 'user'
      },{
        model: Upvote,
        as: 'upvotes'
      }]
    })
    return result
  }
}

export default removeUpvote
