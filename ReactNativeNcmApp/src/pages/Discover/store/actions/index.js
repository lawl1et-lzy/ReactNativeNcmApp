import * as type from '../types';

export const addItem = (value) => {
  return {
    type: type.ADD,
    value,
  };
};

export const minusItem = (value) => {
  return {
    type: type.MINUS,
    value,
  };
};

export const addAuthor = (value) => {
  return {
    type: type.ADD_AUTHOR,
    value,
  };
};
