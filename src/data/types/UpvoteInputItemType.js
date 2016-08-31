
import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql'

const UpvoteInputItemType = new InputObjectType({
  name: 'UpvoteInput',
  fields: () => ({
    id: {type: new NonNull(StringType)}
  })
})

export default UpvoteInputItemType
