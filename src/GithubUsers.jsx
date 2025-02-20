import { useRef, useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const input = useRef(null);

  function handleSubmit(event) {
    event.preventDefault(); // Evita il refresh della pagina
    const newUser = input.current.value;

    setUsers((prev) => [...prev, newUser]);
    input.current.value = ""; // Pulisce il campo dopo l'invio
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={input} />
        <button type="submit">Invia</button>
      </form>
      <ul>
        {users.map((item, index) => {
          return (
            <li key={index}>
              <GithubUser username={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
