import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const baseURL = "hack24.rithask.me";

const InputForm = () => {
  const [values, setValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const [warehouse, setWarehouse] = useState([]);
  const [port, setPort] = useState("");
  const [risk, setRisk] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values:", values);
    // Add your form submission logic here
  };

  let user_loc = navigator.geolocation;
  const geolocator = () => {
    if (user_loc) {
      user_loc.getCurrentPosition(success);
    } else {
      alert("Your browser doesnt support geolocation");
    }
  };
  function success(data) {
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    axios
      .get(`https://${baseURL}/warehouse?lat=${lat}&long=${long}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return [lat, long];
  }

  const handleDropOffChange = (e) => {
    getRisk(port);
  };

  useEffect(() => {
    geolocator();
  }, []);

  return (
    <div className="form">
      <form c onSubmit={handleSubmit}>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label htmlFor="field1">Commodity Type:</label>
          <input
            type="text"
            id="field1"
            name="field1"
            value={values.field1}
            onChange={handleChange}
          />
        </div>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label htmlFor="field2">Commodity Weight:</label>
          <input
            type="text"
            id="field2"
            name="field2"
            value={values.field2}
            onChange={handleChange}
          />
        </div>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label htmlFor="field3">Warehouse option:</label>
          <div>
            <select>
              {warehouse.map((w) => (
                <option value={w.name}>
                  {w.name} ~{((Math.round(w.distance) * 100) / 100).toFixed(2)}
                  km away
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label htmlFor="field4">Drop off Location:</label>
          <input
            type="text"
            id="field4"
            name="field4"
            value={values.field4}
            onChange={handleChange}
            onBlur={handleDropOffChange}
          />
          <div>
            <p>{risk} </p>
          </div>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <div className="field5" style={{ backgroundColor: "#0f7373" }}>
        <label htmlFor="field5">Shipment ID:</label>
        <input
          type="text"
          id="field5"
          name="field5"
          value={values.field2}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputForm;
