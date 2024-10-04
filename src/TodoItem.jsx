import { useState } from "react";
import Swal from "sweetalert2";

export default function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    nama: todo.nama,
    deskripsi: todo.deskripsi,
    deadline: todo.deadline,
  });

  const handleSaveEdit = () => {
    if (!editedTodo.nama || !editedTodo.deskripsi || editedTodo.deadline === "") {
      Swal.fire({
        title: "Error!",
        text: "Input Tidak Boleh Kosong",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
      return;
    }

    onEdit(todo.id, editedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo.nama}
            onChange={(e) => setEditedTodo({ ...editedTodo, nama: e.target.value })}
          />
          <input
            type="text"
            value={editedTodo.deskripsi}
            onChange={(e) => setEditedTodo({ ...editedTodo, deskripsi: e.target.value })}
          />
          <input
            type="date"
            value={editedTodo.deadline}
            onChange={(e) => setEditedTodo({ ...editedTodo, deadline: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p className="p-todo">Nama Todo: {todo.nama}</p>
          <p className="p-todo">Deskripsi Todo: {todo.deskripsi}</p>
          <p className="p-todo">Deadline Todo: {todo.deadline}</p>
          <div className="btn-edit-delete">
            <button onClick={() => setIsEditing(true)} className="edit">
              <img
                src="https://img.icons8.com/color/48/edit--v1.png"
                alt="edit"
                width="20"
                height="20"
              />
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete">
              <img
                src="https://img.icons8.com/ios/50/trash--v1.png"
                alt="delete"
                width="20"
                height="20"
              />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
