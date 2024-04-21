import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    // console.log(this.state.input)
  };

  submitBttn = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteItem = (key) => {
    // console.log(key);
    // const allItems = this.state.items

    // allItems.splice(key,1)

    this.setState({
      items: this.state.items.filter((data,index) => index !== key)
    })
  };

  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.submitBttn}>
          <h1>Todo App</h1>
          <input
            spellCheck= "false"
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items"
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa-solid fa-trash"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
