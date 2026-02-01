import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const BASE_URL = import.meta.env.VITE_BASE_API_URL + "Car";
  console.log(BASE_URL);
  const [vehicleData, setVehicleData] = useState([{}]);
  useEffect(() => {
    async function fetchFields() {
      var info = (await axios.get(BASE_URL)).data;
      setVehicleData(info);
    }
    fetchFields();
  }, []);
  return (
    <>
      <div className="flex flex-col flex-wrap">
        {vehicleData.map((vehicle, index) => (
          <div key={index}> {JSON.stringify({ vehicle })} </div>
        ))}
      </div>
    </>
  );
}

export default Home;
