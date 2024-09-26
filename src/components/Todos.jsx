import React from "react";
import TodoItems from "./TodoItems";  // Komponen untuk setiap item todo

function Todos({ todos, setTodos }) {
  // Urutkan todos dengan cara menempatkan todos yang belum selesai di atas
  const todoSort = todos.slice().sort((a, b) => Number(a.status - b.status));

  return (
    <div className="container">
      {/* Loop melalui todos yang telah diurutkan dan tampilkan setiap item */}
      {todoSort.map((item) => (
        <TodoItems
          key={item.name}  // Setiap item harus memiliki unique key
          items={item}  // Semua data dari todo dikirim sebagai props ke TodoItems
          item={item.name}  // Nama todo
          todos={todos}  // List todos
          status={item.status}  // Status todo (sudah selesai atau belum)
          setTodos={setTodos}  // Fungsi untuk update todos
        />
      ))}
    </div>
  );
}

export default Todos;
