import "./App.scss";
import React from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main__background">
        <HomePage/>
      </main>
    </div>
  );
}

export default App;
