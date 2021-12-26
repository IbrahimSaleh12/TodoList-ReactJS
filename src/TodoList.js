import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Take a shower", id: 1 },
        { text: "Go to gym", id: 2 }
      ]
    }
  }

  remove(id) {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodo })
  }
  render() {
    const todos = this.state.todos.map(todo =>
      <Todo
        key={todo.id}
        text={todo.text}
        removeTodo={this.remove.bind(this, todo.id)}
      />);
    return (
      <div>
        <h1>TodoList</h1>
        {todos}
      </div>
    );
  }
}

export default TodoList;