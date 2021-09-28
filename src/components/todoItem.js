import React from "react";
import "./todoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoItem extends React.Component {
  render() {
    return (
      <>
        <div className="list-container">
          <ul className="todo-list">
            <li>
              <label className="check-container">
                <input
                  type="checkbox"
                  defaultChecked={this.props.todo.completed}
                  onChange={() => this.props.completedItem(this.props.todo)}
                />
                <span className="checkmark"></span>
                <p>{this.renderItem()}</p>
              </label>
              <button className="icon-button">
                <FontAwesomeIcon
                  className="fawicon"
                  icon="times-circle"
                  onClick={() => this.props.deleteItem(this.props.todo.id)}
                />
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }

  renderItem() {
    if (this.props.todo.completed) {
      return <s>{this.props.todo.value}</s>;
    } else return this.props.todo.value;
  }
}

export default TodoItem;
