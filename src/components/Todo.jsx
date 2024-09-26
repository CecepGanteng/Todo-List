import React, { useState } from "react";
import Form from "./Form";  // Komponen untuk menambah item todo
import Todos from "./Todos";  // Komponen untuk menampilkan semua todo
import Counter from "./Counter";  // Komponen untuk menghitung todo yang sudah dan belum selesai

function Todo() {
    // State untuk menyimpan list todos
    const [todos, setTodos] = useState([]);
    
    // Hitung berapa todo yang sudah selesai (status == true)
    const completedTodos = todos.filter((todo) => todo.status == true).length;
    
    // Hitung berapa todo yang belum selesai (status == false)
    const totalTodos = todos.filter((todo) => todo.status == false).length;

  return (
    <div className="container highPrimary scrollH">
      {/* Form untuk menambahkan todo baru */}
      <Form todos={todos} setTodos={setTodos} />
      
      {/* Menampilkan list todos */}
      <Todos todos={todos} setTodos={setTodos}  />
      
      {/* Counter untuk menampilkan jumlah todo yang sudah dan belum selesai */}
      <Counter completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

export default Todo;
