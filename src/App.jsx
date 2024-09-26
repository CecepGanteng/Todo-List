// Import komponen Header dan Todo dari folder components
import CecepGanteng from "./components/CecepGanteng";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./style.css"; // Import file CSS untuk styling

// Fungsi utama aplikasi yang menggabungkan Header dan Todo
function App() {
  return (
    <div className="App">
      {/* Komponen Header untuk menampilkan judul */}
      <Header />
      {/* Komponen Todo untuk manajemen dan penampilan list todo */}
      <Todo />
      {/* Copyright gw */}
      <CecepGanteng />
    </div>
  );
}

export default App;
