import React, { Component } from 'react';
import TodoService from '../service/TodoService';

class TodoComponent extends Component {
    state = {
        todos : []
      }

    componentDidMount() {
        
        TodoService.executeGetService()
                .then(response => {
                    this.setState({
                        todos: response.data
                    })
                })
    }

    render() {
        return (<>
            <h1>Todo Component</h1>
            <div>
               
              <ul className = "list-group">
                 {this.state.todos.map(todo => <li className = "list-group-item" key={todo.id}>Todo: {todo.todoName} <button className="btn btn-danger float-right"onClick={() => {
                     this.deleteTodo(todo.id)}}>x</button></li>)}
              </ul>
            </div>
            <div className="float-right">
                <button className="btn btn-success " onClick={this.gotoBeanComponent}>Add Todo</button>
            </div>
        </>
        )
    }

    gotoBeanComponent = () => {
        this.props.history.push('/add-todo')
    }

    deleteTodo = (id) => {    
        TodoService.executeDeleteService(id)
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
    }
}

export default TodoComponent