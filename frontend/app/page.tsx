"use client";

import { FormEvent } from "react";
import SearchForm from "@/components/index/Form";

export default function Home() {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const result = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticker: form.get("ticker"),
      }),
    }).then((res) => res.json());

    console.log(result);
  };

  return (
    <div>
      <SearchForm submitHandler={submitHandler} />
    </div>
  );
}
