import React from "react";
import "./App.css";
import NasaList from "./components/Nasa";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaList />
    </div>
  );
}

export default App;
