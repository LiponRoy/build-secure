// app/page.tsx
"use client";

import React, { useState } from "react";
import { add, multiply, capitalize, isEven } from "@/lib/utils";

export default function HomePage() {
  const [name, setName] = useState("");
  const [capitalized, setCapitalized] = useState("");

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Utility Function Playground</h1>

      <div className="mt-6">
        <label className="block">Enter a name:</label>
        <input
          className="border p-2 mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => setCapitalized(capitalize(name))}
        >
          Capitalize
        </button>
        {capitalized && <p className="mt-2">Resultssssss: {capitalized}</p>}
      </div>

      <div className="mt-6">
        <label className="block">Add & Multiply:</label>
        <input
          className="border p-1 mr-2"
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <input
          className="border p-1 mr-2"
          type="number"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
        <p className="mt-2">Add: {add(a, b)}</p>
        <p>Multiply: {multiply(a, b)}</p>
        <p>{a} is even? {isEven(a) ? "Yes" : "No"}</p>
      </div>
    </main>
  );
}
