"use client";
import { useState } from "react";

export default function FooterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-2 py-1 rounded text-black"
        required
      />
      <button type="submit" className="ml-2 px-3 py-1 bg-blue-500 rounded">
        {submitted ? "Thanks!" : "Subscribe"}
      </button>
    </form>
  );
}
