/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize'
import Model from '../sequelize'

const Ranking = Model.define('Ranking', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true
  },

  userId: {
    type: DataType.UUID
  },

  creationDate: {
    type: DataType.DATE,
    allowNull: false
  }

})

export default Ranking
