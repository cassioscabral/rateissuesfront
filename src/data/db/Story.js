import {Story, Upvote, User} from '../models'

async function create (body, userId, upvotes = []) {
  let publishedDate = new Date()
  return await Story.create(
    {body, publishedDate, userId, upvotes},
    {include: [
      {model: Upvote, as: 'upvotes'}
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
      model: Upvote,
      as: 'upvotes'
    }]
  })
}


export default {
  create,
  findAll
}
