import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'

const addStory = {
  name: 'addStory',
  type: StoriesItemType,
  args: {
    story: {type: StoriesInputItemType}
  },
  resolve (value, {story}) {
    return {id:'01',body:story.body, publishedDate: new Date()}
  }
}

export default addStory
