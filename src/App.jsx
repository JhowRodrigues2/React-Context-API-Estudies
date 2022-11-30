import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import Mirror from "./components/Mirror";
import CountProvider from "./context/CountContext";
function App() {
  return (
    <CountProvider>
      <div className="App">
        <Count />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
