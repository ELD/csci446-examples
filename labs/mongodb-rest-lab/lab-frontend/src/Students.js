import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Students() {
  const { classId } = useParams();
  const [students, setStudents] = useState([]);

  // Runs on page render or when classId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/classes/${classId}/students`)
      .then((body) => body.json())
      .then((json) => setStudents(() => [...json.students]));
  }, [classId]);

  return (
    <ul>
      {students.map((student) => (
        <li key={student._id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default Students;
