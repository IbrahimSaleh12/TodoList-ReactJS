import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>{this.props.text}</p>
        <button onClick={this.props.removeTodo}>X</button>
      </div>

    );
  }
}

export default Todo;