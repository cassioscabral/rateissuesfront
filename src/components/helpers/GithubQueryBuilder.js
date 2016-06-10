class GithubQueryBuilder {
  // sample
  // language:ruby+type:issue+state:open+comments:>0
  constructor () {
    this.query = 'language:ruby+type:issue+state:open+comments:>0'
    this.comments = 10
    this.language = 'javascript'
    this.type = 'issue'
    this.state = 'open'
    this.sort = 'comments'
  }

  // TODO deal with range comments
  setHotFilter () {
    this.comments = 10
  }
  setTrendingFilter () {
    this.comments = 5
  }
  setFreshFilter () {
    this.comments = 0
  }
  applyFilter (tab) {
    switch (tab) {
    case 'hot':
      this.setHotFilter()
      break
    case 'trending':
      this.setTrendingFilter()
      break
    case 'fresh':
      this.setFreshFilter()
      break
    default:
      this.setFreshFilter()
    }
  }
  setLanguage (language) {
    // TODO deal with invalid data
    this.language = language
  }

  _buildQuery () {
    let newQuery = ''
    newQuery += `language:${this.language}`
    newQuery += `+type:${this.type}`
    newQuery += `+state:${this.state}`
    newQuery += `+comments:>${this.comments}`
    newQuery += `&sort:${this.sort}`

    this.query = newQuery
  }

  getQuery () {
    this._buildQuery() // ensure that the query will be updated
    return this.query
  }
}
export default GithubQueryBuilder
