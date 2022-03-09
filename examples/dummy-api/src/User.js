import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, [userId]);

  return <h1>{user.name}</h1>;
}

export default User;
