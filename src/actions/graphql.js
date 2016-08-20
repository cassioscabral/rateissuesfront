import fetch from '../core/fetch'

function query (query, sucess=()=>{}, err=()=>{}) {
  fetch('/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    }),
    credentials: 'include'
  })
  .then(res => res.json())
  .then(
    data => {
      sucess(data)
    }
  ).catch(
    (e) => {
      err(e)
    }
  )
}

export default {
  query
}
