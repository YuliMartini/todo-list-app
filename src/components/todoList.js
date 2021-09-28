import React from "react";
import "./todoList.css";
import logo from "./images/check-list.png";
import TodoItem from "./todoItem";
import AddTodo from "./addTodo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import FlipMove from "react-flip-move";
import Swal from "sweetalert2";

library.add(faTimesCircle);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodoValue: "",
      todos: [
        {
          id: 0,
          value: "",
          completed: false,
        },
      ],
    };
  }

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((item) => {
      return item.id !== todo;
    });
    this.setState({ todos });
  };

  addNewTodo = (value) => {
    if (value) {
      const todos = [...this.state.todos];
      if (!todos.some((item) => item.value === value)) {
        todos.push({
          id: Date.now(),
          value: value,
          completed: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "That task already exists!",
        });
      }
      this.setState({ addTodoValue: "", todos });
    } else {
      Swal.fire({
        icon: "error",
        title: "Uh uh...",
        text: "You need to write something!",
      });
    }
  };

  handleCompleted = (todo) => {
    const todos = [...this.state.todos];
    todos.map((item) => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todos });
  };

  render() {
    const items = this.state.todos;
    const listItems = items.map((todo) => {
      if (todo.id === 0) {
        return null;
      } else
        return (
          <TodoItem
            todo={todo}
            deleteItem={this.handleDelete}
            completedItem={this.handleCompleted}
            key={todo.id}
          />
        );
    });

    return (
      <div className="container">
        <header className="title">
          <img src={logo} alt="" />
          <h3>My TODO List</h3>
        </header>
        <AddTodo
          addItem={this.addNewTodo}
          addTodoValue={this.state.addTodoValue}
        />
        <FlipMove duration={300} easing="linear">
          {listItems}
        </FlipMove>
      </div>
    );
  }
}
export default TodoList;
