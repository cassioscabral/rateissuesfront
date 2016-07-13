
import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql'

const StoriesInputItemType = new InputObjectType({
  name: 'StoriesInput',
  fields: () => ({
    body: {type: new NonNull(StringType)}
  })
})

export default StoriesInputItemType
