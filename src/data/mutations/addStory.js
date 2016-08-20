import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'
import {Story, Ranking} from '../models'

const addStory = {
  name: 'addStory',
  type: StoriesItemType,
  args: {
    story: {type: StoriesInputItemType}
  },
  async resolve (value, {story}) {
    let result = await Story.create({body: story.body, publishedDate:new Date(),userId:value.request.user.id, rankings:[]},
    {include: [{model: Ranking, as: 'rankings'}]})
    result.user = value.request.user
    return result
  }
}

export default addStory
