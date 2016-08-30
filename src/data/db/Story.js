import {Story, UpVote, User} from '../models'

async function create (body, userId, upvotes = []) {
  let publishedDate = new Date()
  return await Story.create(
    {body, publishedDate, userId, upvotes},
    {include: [
      {model: UpVote, as: 'upvotes'}
    ]}
  )
}

async function findAll () {
  return await Story.findAll({
    order: 'publishedDate DESC',
    include: [{
      model: User,
      as: 'user'
    },{
      model: UpVote,
      as: 'upvotes'
    }]
  })
}


export default {
  create,
  findAll
}
