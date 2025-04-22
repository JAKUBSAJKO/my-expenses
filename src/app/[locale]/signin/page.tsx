"use client";

import { routes } from "@/routes/routes";
import { useSessionStore } from "@/store/session";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSession, setUser, setLoading } = useSessionStore((state) => state);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error, data } = await createClient().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      setLoading(false);
      return;
    }

    setSession(data.session);
    setUser(data.user);

    setEmail("");
    setPassword("");

    setLoading(false);
    redirect(routes.board);
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
          Sign in
        </button>
      </form>
    </div>
  );
}
