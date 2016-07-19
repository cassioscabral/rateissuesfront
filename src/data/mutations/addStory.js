import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'
import Story from '../models/Story'

const addStory = {
  name: 'addStory',
  type: StoriesItemType,
  args: {
    story: {type: StoriesInputItemType}
  },
  async resolve (value, {story}) {
    return await Story.create({body: story.body, publishedDate:new Date()})
  }
}

export default addStory
