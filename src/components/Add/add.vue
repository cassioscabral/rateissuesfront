<template>
<div class="add-component">
  <h1>Add a project</h1>
  <div class="control">
    <input type="text"
      placeholder="rateissues"
      @change="checkInput">
  </div>
  <div class="results">
    <h2 v-show="searchResult.length > 0">Results</h2>
    <project-preview
      class="result-item"
      v-for="result in searchResult"
      :project="result">

    </project-preview>
  </div>
</div>
</template>

<script>
import GitHub from 'github-api'
import ProjectPreview from 'src/components/Project/ProjectPreview'

// TODO move Github functions to a common place
let getGithubRequestLimit = () => {
  let githubInstance = new GitHub()
  githubInstance.getRateLimit().getRateLimit()
  .then(function (resp) {
      console.log('Limit remaining: ' + resp.data.rate.remaining)
      // date constructor takes epoch milliseconds and we get epoch seconds
      console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000))
  }).catch(function (error) {
      console.log('Error fetching rate limit', error.message)
  })
}

let search = (input) => {
  const gh = new GitHub()
  console.log('gh', gh)
  const search = gh.search()
  console.log('search', search)
  return search.forRepositories({q: input})
}

let getIssue = (url) => {
  const gh = new GitHub()
  let {username, repository, issueNumber} = getInfoFromURL(url)

  gh
  .getIssues(username, repository)
  .getIssue(issueNumber)
  .then((response) => {
    console.log('issue 1 response', response) // response data have the issue
    return response.data
  })
}

// 'https://github.com/cassioscabral/rateissuesfront/issues/1'
// should match a few URLs from Github before extract info
// TODO change to extractInfoFromURL
let getInfoFromURL =  (url) => {
  let splittedUrl = url.split('/')
  return {
    username: splittedUrl[splittedUrl.length - 4],
    issueNumber: splittedUrl[splittedUrl.length - 1],
    repository: splittedUrl[splittedUrl.length - 3]
  }
}

export default {
  data () {
    return {
      searchResult: []
    }
  },
  computed: {},
  methods: {
    checkInput (input) {
      let inputValue = input.target.value
      // TODO check URL
      // let infoFromURL = getInfoFromURL(inputValue)
      // let searchResult = search(inputValue).then(result => result)
      search(inputValue).then(response => {
        console.log('search response', response)
        this.searchResult = response.data
      })
      // console.log('searchResult', searchResult)
    }
  },
  components: {
    ProjectPreview
  }
}
</script>
<style lang="stylus" scoped>

.add-component {
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column
}
h1 {
  display: flex
  font-size: 3rem
  margin: 2rem 0
}
.control {
  display: flex
  input {
    font-size: 2rem
  }
}

.results {
  display: flex
  flex-direction: column
  h2 {
    margin: 15px 0
  }
}
</style>
