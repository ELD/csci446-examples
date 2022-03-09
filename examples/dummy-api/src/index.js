import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/*<Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/todos">
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/new" element={<NewTodo />} />
            <Route path=":todoId" element={<SingleTodo />} />
          </Route>
</Route>*/}
        <Route path="/" element={<App />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
