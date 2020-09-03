import * as actionType from '../types';
import {combineReducers} from 'redux';

const initialState = {
  author: 'niya',
  list: [],
};

const author = (state = initialState.author, action) => {
  const {type, value} = action;
  switch (type) {
    case actionType.ADD_AUTHOR:
      return value;
    default:
      return state;
  }
};

const list = (state = initialState.list, action) => {
  const {type, value} = action;
  switch (type) {
    case actionType.ADD: {
      return [...state, value];
    }
    case actionType.MINUS:
      return state.splice(value, 1);
    default:
      return state;
  }
};

export default combineReducers({
  list,
  author,
});
