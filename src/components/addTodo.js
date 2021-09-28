import React from "react";
import "./addTodo.css";

class AddTodo extends React.Component {
  state = {
    value: this.props.addTodoValue,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  clearInput = () => {
    document.getElementById("inputValue").value = "";
    this.setState({ value: "" });
  };

  addItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value.trim());
    this.clearInput();
  };

  render() {
    return (
      <>
        <section className="add-task">
          <form id="form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter new task..."
              id="inputValue"
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.addItem}>
              Add
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default AddTodo;
