
import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType
} from 'graphql'

const StoriesInputItemType = new InputObjectType({
  name: 'StoriesInput',
  fields: () => ({
    id: {type: StringType},
    body: {type: StringType}
  })
})

export default StoriesInputItemType
