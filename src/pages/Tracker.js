import React, { useState } from "react";
import axios from "axios";
const baseURL = "hack24.rithask.me";

function Tracker() {
  const [risk, setRisk] = useState("");
  const [port, setPort] = useState("");

  const getRisk = () => {
    axios
      .get(`https://${baseURL}/port?name=${port}`)
      .then((response) => {
        let risk_level = response.data.risk_level;
        setRisk(risk_level);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRiskForm = (e) => {
    e.preventDefault();
    getRisk(port);
  };

  return (
    <div>
      <form onSubmit={handleRiskForm}>
        <div style={{ width: "500px" }}>
          <label htmlFor="field2">Check for risks:</label>
          <input
            type="text"
            id="field2"
            name="field2"
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <button type="submit">Check risk</button>
      </form>
      <div>
        <p>{risk}</p>
      </div>
    </div>
  );
}

export default Tracker;
