import { useState } from "react";
import "./App.css";
import { content } from "./config/languageConfig";

function App() {
  const [lang, setlang] = useState("en");
  function onSelect(e) {
    setlang(e.target.value);
  }
  return (
    <header>
      <ul>
        <li>{content[lang].Home}</li>
        <li>{content[lang].AboutUs}</li>
        <li>{content[lang].Career}</li>
        <li>
          <label>Choose Language :</label>
          <select onChange={onSelect}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>

            <option value="sp">Spanish</option>
          </select>
        </li>
      </ul>
    </header>
  );
}

export default App;
