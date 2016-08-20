import {Story, Ranking, User} from '../models'

async function create (body, userId, rankings = []) {
  let publishedDate = new Date()
  return await Story.create(
    {body, publishedDate, userId, rankings},
    {include: [
      {model: Ranking, as: 'rankings'}
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
      model: Ranking,
      as: 'rankings'
    }]
  })
}


export default {
  create,
  findAll
}
