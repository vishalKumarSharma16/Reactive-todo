import {connect} from 'react-redux'
import Todo from '../components/Todo'

import { addTodoList, removeTodoList, addTodoItem, removeTodoItem} from '../actions'

export const mapDispatchToProps = (dispatch) => {
  return {
    addList: (name) => {
      dispatch(addTodoList(name))
    },
    removeList: (name) => { dispatch(removeTodoList(name))},
    addTodo: (list, todo) => { dispatch(addTodoItem(list, todo))},
    removeTodo: (list, index) => { dispatch(removeTodoItem(list, index))},
    currentState: (state) => { dispatch({type: "STATE", state})}
  }
}

export const mapStateToProps = (state) => {
  return { todoLists : state  };
}


export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
