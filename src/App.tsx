import React from "react";
import axios from "axios";

import "./App.css";
import SocialFollow from "./SocialFollow";
import { useAdvice } from "./logic";

const App = () => {
  const advice = useAdvice();

  return (
    <div>
      <div className="app">
        <h1>WELCOME TO GYAANI BABA</h1>
        <h3>
          Your personal advisor to keep you motivated and calm amidst chaos
        </h3>
        <div className="card">
          <h2>{advice.value}</h2>
          <button className="buton" onClick={advice.fetch}>
            <span>
              <h4>Unlock today's Gyaan</h4>
            </span>
          </button>
        </div>
      </div>
      <footer>
        <SocialFollow />
      </footer>
    </div>
  );
};

export default App;
