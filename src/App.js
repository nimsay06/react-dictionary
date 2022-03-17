import "./App.css";
import React from "react";
import logo from "./Books.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="BooksLogo img-fluid" alt="Logo" />
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer>
          Coded by Yasmin Tercenio
          <br />
          Open source code found on{" "}
          <a
            href="https://github.com/nimsay06/react-dictionary.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <br />
          Book Logo & Background Image created by Yasmin Tercenio
        </footer>
      </div>
    </div>
  );
}
