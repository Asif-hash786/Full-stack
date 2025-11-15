import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
  let [Todo, setTodo] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo((prevTodos) => Todo.filter((todo => todo.id != id)));
  };
  let uppercaseAll = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  let uppercaseOne = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  let markAsDone = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  let markAllDone = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };
  return (
    <div>
      <input type="text" placeholder="Enter your task" value={newTodo}
        onChange={updateTodoValue}></input>
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Submit</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {Todo.map((todo) => (
          <li key={todo.id}>
            {/* <span>{todo.task}</span> */}
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => uppercaseOne(todo.id)}>Uppercase one</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={uppercaseAll}>Uppercase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={markAllDone}>Done All</button>
    </div>
  );
}