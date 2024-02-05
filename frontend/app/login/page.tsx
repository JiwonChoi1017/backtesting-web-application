"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/login")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  });

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Home;
