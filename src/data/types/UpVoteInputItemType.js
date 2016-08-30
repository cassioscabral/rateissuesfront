
import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql'

const UpVoteInputItemType = new InputObjectType({
  name: 'UpVoteInput',
  fields: () => ({
    id: {type: new NonNull(StringType)}
  })
})

export default UpVoteInputItemType
