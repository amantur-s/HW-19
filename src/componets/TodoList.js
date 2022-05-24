import { Component } from "react";
import styles from "./TodoList.module.css";
class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className={styles.list}>
          {this.props.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
