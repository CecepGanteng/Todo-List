import React from "react";

function TodoItems({ item, items, setTodos, todos, status }) {
  
  // Fungsi untuk menghapus todo berdasarkan nama
  function handleDelete(item) {
    console.log(`berhasil klik!\nberhasil dapat data ${item}`);
    // Filter todos yang namanya tidak sama dengan item yang diklik
    setTodos(todos.filter((todo) => todo.name !== item));
  }

  // Fungsi untuk mengubah status todo (done/undone)
  function handleClickActive(item) {
    // Update status todo menjadi kebalikan dari status sebelumnya
    setTodos(
      todos.map((todo) =>
        todo.name === item ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  // Jika status todo aktif, tambahkan class "coretan" (untuk menandai todo selesai)
  const statusActive = items.status ? "coretan" : "";

  return (
    <div className="box-items">
      {/* Nama todo ditampilkan sebagai teks, bisa diklik untuk toggle status */}
      <h4 className="todo-items">
        <span className={statusActive} onClick={() => handleClickActive(item)}>
          {item}
        </span>
      </h4>
      {/* Tombol untuk menghapus todo */}
      <button onClick={() => handleDelete(item)}>X</button>
    </div>
  );
}

export default TodoItems;
