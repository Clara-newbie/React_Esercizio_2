import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function fetchGithubUser() {
    try {
      const result = await fetch(`https://api.github.com/users/${username}`);
      const resultJson = await result.json();

      setData(resultJson);
    } catch (error) {
      console.log(`Error during the fetching process: ${error}`);
    }
  }

  useEffect(() => {
    fetchGithubUser(); // il parametro non è necessario
  }, [username]);

  return (
    <div>
      {!data ? (
        <span>No user found</span>
      ) : (
        <div>
          <h2>{data.name}</h2>
          <p>{data.login}</p>
          <img src={data.avatar_url} alt={data.name} />
        </div>
      )}
    </div>
  );
}
