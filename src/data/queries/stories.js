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
  {id:'1',body:'medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3#.z2x12e8p6',publishedDate: new Date()}
]

const news = {
  type: new List(StoriesItemType),
  resolve () {
    return items
  }
}

export default news
