import { useParams } from "react-router-dom";

export default function NewStudent() {
  const { classId } = useParams();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.target[0].value;

        fetch(`http://localhost:8000/students`, {
          method: "POST",
          body: JSON.stringify({ name: input }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    >
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
