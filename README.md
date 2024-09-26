# Aplikasi Todo List

Ini adalah aplikasi Todo List sederhana yang dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk menambah, menghapus, dan melacak status penyelesaian tugas.

<img src="https://i.ibb.co.com/SxZkfTn/mytodolist.png" alt="mytodolist">

## Fitur

- **Tambah Todo**: Pengguna dapat mengetik tugas dan menambahkannya ke dalam daftar.
- **Hapus Todo**: Setiap item dapat dihapus dengan menekan tombol hapus (X).
- **Tandai Sebagai Selesai**: Pengguna dapat mengklik nama tugas untuk menandainya sebagai selesai. Tugas yang selesai akan diberikan gaya coretan.
- **Lacak Tugas Selesai/Belum Selesai**: Aplikasi menampilkan jumlah tugas yang sudah selesai dan yang belum selesai.

## Instalasi

1. Clone repository:
    ```bash
    git clone https://github.com/username/todo-list.git
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd todo-list
    ```
3. Instal dependensi:
    ```bash
    npm install
    ```

4. Jalankan aplikasi:
    ```bash
    npm run dev
    ```

## Struktur Proyek

```bash
src
│
├── components
│   ├── Header.jsx      # Menampilkan judul aplikasi
│   ├── Todo.jsx        # Mengelola state todo dan fungsionalitas utama
│   ├── Form.jsx        # Form untuk menambah todo baru
│   ├── Todos.jsx       # Menampilkan daftar todo
│   ├── TodoItems.jsx   # Menampilkan setiap item todo
│   └── Counter.jsx     # Menampilkan penghitung tugas selesai dan belum selesai
│
├── App.jsx             # Komponen utama yang menggabungkan semua sub-komponen
├── style.css           # Styling dasar untuk aplikasi
└── index.js            # Entry point untuk aplikasi React
