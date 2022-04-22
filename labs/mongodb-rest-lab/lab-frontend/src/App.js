import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./Classes";
import "./App.css";
import Class from "./Class";
import Students from "./Students";
import NewStudent from "./NewStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Classes />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:classId">
            <Route path="" element={<Class />} />
            <Route path="students" element={<Students />} />
            <Route path="students/new" element={<NewStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
