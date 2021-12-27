import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button onClick={this.props.removeTodo}>X</button>
      </div>

    );
  }
}

export default Todo;