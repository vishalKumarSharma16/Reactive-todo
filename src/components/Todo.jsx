import React from 'react';


export default class Todo extends React.Component {
  state = {
    show: 0,
  }

  componentDidMount(){
    if(localStorage.getItem("react-todo") !== null){
        this.props.currentState(JSON.parse(localStorage.getItem("react-todo")))
    }
  }


  render() {
    const todoLists = this.props.todoLists


    const showKey = this.state.show;
    return (
        <ul className="py-1 px-2">
          {
            Object.keys(todoLists).map((list, index) => (
              <li key={index}>
              <p className="font-weight-bold" onClick={(event) => {
                this.setState({show : index})
              }}>{list} <i className="fas fa-times ml-2" onClick={() => {this.props.removeList(list)}}></i></p>
                <ol style={{ display: index === showKey ? "block" : "none"}}>
                  {todoLists[list].map((item, index) => (
                    <li className="py-1 text-primary" key={list + index}>
                    {item}  <i className="fas fa-times ml-2" onClick={() => {this.props.removeTodo(list, index)}}></i>
                    </li>
                  ))}
                  <span ><strong>+</strong><input type="text" onKeyDown={(e) => {
                    if(e.key === "Enter"){
                    this.props.addTodo(list, e.target.value)
                    e.target.value = ""
                  }
                  }
                  } placeholder={"add one more " + list} /></span>
                </ol>
              </li>
            ))

          }
        </ul>
    )
  }
}
