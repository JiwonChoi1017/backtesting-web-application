"use client";

import { useEffect, useState } from "react";

import Card from "@/components/common/ui/Card";
import RegisterForm from "@/components/register/Form";

const Home = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/register")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  });

  return (
    <div>
      <p>{message}</p>
      <Card>
        <RegisterForm />
      </Card>
    </div>
  );
};

export default Home;
