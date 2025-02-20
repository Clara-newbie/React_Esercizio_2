import { StrictMode, useState } from "react";
import Container from "./Container";
import Hello from "./Hello";
import { LanguageContext } from "./LanguageContext";
import GithubUsers from "./GithubUsers";

export default function App() {
  const [language, setLanguage] = useState("en");

  function handleChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <StrictMode>
      <Container title={<h1>This is my page</h1>}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita
          officiis ab eum consectetur placeat. Totam laborum, ipsam qui
          perspiciatis non quia minus quam dolorem, facere a, at corrupti quae.
        </p>
      </Container>
      <hr />
      <LanguageContext.Provider value={language}>
        <Hello />
        <select name="languages" onChange={handleChange} value={language}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </LanguageContext.Provider>
      <hr />
      <GithubUsers />
    </StrictMode>
  );
}
