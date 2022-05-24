import { Component } from "react";
import TodoList from "./TodoList";
import styles from "./TodoForm.module.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      items: [],
    };
  }

  onChangeHandler(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onFormHandler(event) {
    event.preventDefault();

    if (this.state.value !== "") {
      this.setState({
        value: "",
        items: [...this.state.items, this.state.value],
      });
    }
  }

  render() {
    return (
      <div className={styles.todocontainer}>
        <input
          type={"text"}
          value={this.state.value}
          onChange={this.onChangeHandler.bind(this)}
        />
        <button onClick={this.onFormHandler.bind(this)}>add</button>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}
export default TodoForm;
