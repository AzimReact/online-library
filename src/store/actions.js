import * as actions from './actionTypes';

export const addDelFavorite = books => ({
  type: actions.ADD_DEL_FAVORITE,
  payload: books
})

export const addBook = (book) => ({
  type: actions.ADD_BOOK,
  payload: book
})

export const editBook = (book) => ({
  type: actions.EDIT_BOOK,
  payload: book
})

export const deleteBook = (id) => ({
  type: actions.DELETE_BOOK,
  payload: { id }
})

export const sortByAsc = () => {
  return {
    type: actions.SORT_ASC,
  };
};

export const sortByDesc = () => {
  return {
    type: actions.SORT_DESC,
  };
};