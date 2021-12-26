import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ text: evt.target.value })
  }
  handleSubmit(evt) {
    const random = Math.floor(Math.random() * 1000);
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: random });
    this.setState({ todo: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text">New Todo</label>
        <input
          type="text"
          id="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;