import * as types from '../constants'

export const addTodoList = (name) => ({
  type: types.ADD_TODO_LIST,
  name,
})

export const removeTodoList = (name) => ({
  type: types.REMOVE_TODO_LIST,
  name,
})

export const addTodoItem = (list, item) => ({
  type: types.ADD_TODO,
  list,
  item,
})

export const removeTodoItem = (list, index) => ({
  type: types.REMOVE_TODO,
  list,
  index
})
