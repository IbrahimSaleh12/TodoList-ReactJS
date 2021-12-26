import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

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

  add(todo) {
    this.setState(state => ({ ...state, todo }));
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
        <NewTodoForm addTodo={() => this.add} />
      </div>
    );
  }
}

export default TodoList;