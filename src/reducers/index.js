import { combineReducers } from 'redux'
import ItemsReducer from './reducer-items'
import ActiveItem from './reducer-active-item'

const rootReducer = combineReducers({
  items: ItemsReducer,
  activeItem: ActiveItem
})

export default rootReducer
