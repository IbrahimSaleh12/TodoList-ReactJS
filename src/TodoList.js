import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this);
  }

  create(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  remove(id) {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodo })
  }
  render() {
    const todos = this.state.todos.map(todo =>
      <Todo
        key={todo.id}
        task={todo.task}
        removeTodo={this.remove.bind(this, todo.id)}
      />);
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;