import React from "react";
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";
import { App } from "./App";
import './index.css'

// Это коренной файл проекта, функция снизу рендерит все приложение, и создает маршрутизатор 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);




