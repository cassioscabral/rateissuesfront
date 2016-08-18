
import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql'

const RankingInputItemType = new InputObjectType({
  name: 'RankingInput',
  fields: () => ({
    id: {type: new NonNull(StringType)}
  })
})

export default RankingInputItemType
