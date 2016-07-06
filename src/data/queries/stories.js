/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {GraphQLList as List} from 'graphql'
import StoriesItemType from '../types/StoriesItemType'

let items = [
  {id:'01',body:'https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3#.z2x12e8p6',publishedDate: new Date()},
  {id:'02',body:'http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository',publishedDate: new Date()},
  {id:'03',body:'https://github.com/cassioscabral/rateissuesfront/issues/1',publishedDate: new Date()},
  {id:'04',body:'https://www.quora.com/Which-programming-language-has-the-best-career-salary-opportunities-over-the-next-decade',publishedDate: new Date()},
  {id:'05',body:'New version is ready!',publishedDate: new Date()},
  {id:'06',body:'https://www.youtube.com/watch?v=KYzlpRvWZ6c&',publishedDate: new Date()},
  {id:'07',body:'https://twitter.com/dan_abramov/status/738286536161136644',publishedDate: new Date()},
  {id:'08',body:'08',publishedDate: new Date()},
  {id:'09',body:'09',publishedDate: new Date()},
  {id:'10',body:'10',publishedDate: new Date()},
  {id:'11',body:'11',publishedDate: new Date()},
  {id:'12',body:'12',publishedDate: new Date()},
  {id:'13',body:'13',publishedDate: new Date()}
]

const news = {
  type: new List(StoriesItemType),
  resolve () {
    return items
  }
}

export default news
