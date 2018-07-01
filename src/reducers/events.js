import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // { 1: {"id": "1", xxxxx, ...}} id属性を持つオブジェクト構造にする
      return _.mapKeys(action.response.data, "id")
    default:
      return events
  }
}