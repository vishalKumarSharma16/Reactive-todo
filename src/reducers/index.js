// reducers
//import {combineReducers} from 'redux';
import * as types from '../constants';

export const listReducer = (state = {}, action) => {
  const NS = Object.assign({}, state);
  switch(action.type){
    case types.ADD_TODO_LIST:
      NS[action.name] = []
      return NS
    case types.REMOVE_TODO_LIST:
      delete NS[action.name]
      return NS
    case types.ADD_TODO:
      NS[action.list].push(action.item)
      return NS
    case types.REMOVE_TODO:
      NS[action.list].splice(action.index, 1)
      return NS
    case "STATE":
      return action.state;
    default:
      return NS
  }
}
