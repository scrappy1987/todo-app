import React, { Component } from 'react';
import TodoService from '../service/TodoService';

const divStyle = {
  marginBottom: '7px'
};

class AddTodoComponent extends Component {
    state = {
    todoName: ""
  }

  handleChange = event => {
    this.setState({ todoName: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    TodoService.executePostService({"todoName": this.state.todoName})
      .then(res => {
        this.props.history.push('/todo')
      })
  }

  render() {
    return (
      <div>
        <h1>Add something I need to do</h1>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label>
            <input  className="form-control" type="text" name="todoName" onChange={this.handleChange} />
          </label>
          <button style={divStyle}className="btn btn-success" type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodoComponent