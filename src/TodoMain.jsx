import { useState } from "react";
import Swal from "sweetalert2";
import TodoItem from "./TodoItem";
import "./todo.css";

export default function TodoMain() {
  const [click, setClick] = useState(1);
  const [todos, setTodos] = useState([]);

  function handlerTodoAdd() {
    const nama = document.querySelector("#nama").value;
    const deskripsi = document.querySelector("#deskripsi").value;
    const deadline = document.querySelector("#deadline").value;

    if (!nama || !deskripsi || deadline === "") {
      Swal.fire({
        title: "Error!",
        text: "Input Tidak Boleh Kosong",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
      return;
    }

    const newTodo = { id: click, nama, deskripsi, deadline };
    setTodos([...todos, newTodo]);
    setClick(click + 1);

    // Clear inputs after adding
    document.querySelector("#nama").value = "";
    document.querySelector("#deskripsi").value = "";
    document.querySelector("#deadline").value = "";
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container">
        <div className="header-title">
          <h1 className="title">Todo List</h1>
          <p>Management Tugas Dengan Mudah</p>
        </div>
        <div className="content">
          <div className="todo">
            <div className="input-todo">
              <label htmlFor="nama">Nama Todo:</label>
              <br />
              <input id="nama" type="text" placeholder="Nama Todo" required />
              <br />

              <label htmlFor="deskripsi">Deskripsi Todo:</label>
              <br />
              <input id="deskripsi" type="text" placeholder="Deskripsi Todo" required />
              <br />

              <label htmlFor="deadline">Deadline Todo:</label>
              <br />
              <input id="deadline" type="date" placeholder="Add Deadline" required />
              <br />
              <div className="btn-add">
                <button onClick={handlerTodoAdd} className="btn-todo">
                  Add
                </button>
              </div>
            </div>
            <ul className="list-todo">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
