"use client";

import { routes } from "@/routes/routes";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await createClient().auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return;
    }

    setEmail("");
    setPassword("");

    redirect(routes.signin);
  };

  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!email && !password}>
          Sign up
        </button>
      </form>
    </div>
  );
}
