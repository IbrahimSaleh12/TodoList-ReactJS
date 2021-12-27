import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  remove(id) {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodo })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo =>
      <Todo
        key={todo.id}
        task={todo.task}
        removeTodo={this.remove.bind(this, todo.id)}
        updateTodo={this.update}
        id={todo.id}
        completed={todo.completed}
        toggleTodo={this.toggleCompletion}
      />);
    return (
      <div className="TodoList">
        <h1>React Todo List <span>A Simple React Todo List App </span></h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;