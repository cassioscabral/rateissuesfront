import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'
import {Story, User, Upvote} from '../models'

const addUpvote = {
  name: 'addUpvote',
  type: StoriesItemType,
  args: {
    story: {type: StoriesInputItemType}
  },
  async resolve (value, {story}) {
    let userId = value.request.user.id
    let storyId = story.id
    let user = await User.findById(userId)
    if (user){
      let upvote = await Upvote.findOne({where: {userId, storyId}})
      if (! upvote){
        Upvote.create({userId, storyId, creationDate: new Date()})
      }
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
    }else{
      throw 'Invalid user!'
    }
  }
}

export default addUpvote
