import React, { useState } from "react";

function Form({todos, setTodos}) {
  // State untuk menampung input todo baru
  const [todo, setTodo] = useState({name: "", status: false});

  // Fungsi untuk menangani submit form
  function handleSubmit(e) {
    e.preventDefault();  // Mencegah halaman reload
    setTodos([...todos, todo]);  // Tambahkan todo baru ke dalam list
    setTodo({name: "", status: false});  // Reset input setelah menambah todo
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input untuk menambah nama todo */}
      <input
        type="text"
        onChange={(e) => setTodo({name: e.target.value, status: false})}
        value={todo.name}
        placeholder="type your do.."
      />
      {/* Tombol untuk menambah todo */}
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
