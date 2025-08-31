import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ping, setPing] = useState("");

  useEffect(() => {
    const fetchPing = async () => {
      try {
        const res = await axios.get("http://localhost:8284/api/ping");
        setPing(`${res.data.message} at ${res.data.time}`);
      } catch (err) {
        setPing("Ошибка: " + (err.message || "Неизвестная ошибка"));
      }
    };

    fetchPing();
  }, []);

  return (
    <div>
      <h1>Backend говорит:</h1>
      <p>{ping || "Загрузка..."}</p>
    </div>
  );
}

export default App;
