import {
  GraphQLInt
} from 'graphql'

// import StoriesItemType from '../types/StoriesItemType'
import StoriesInputItemType from '../types/StoriesInputItemType'

const stories = {
  name: 'AddStory',
  type: GraphQLInt,
  args: {
    story: {type: StoriesInputItemType}
  },
  resolve (value, {story}) {
    return 1
  }
}

export default stories
