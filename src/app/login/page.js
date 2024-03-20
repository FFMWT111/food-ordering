"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginProgress(false);
  }

  return (
    <section className="mt-6">
      <h1 className="text-primary text-4xl text-center mb-6">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          disabled={loginProgress}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          disabled={loginProgress}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loginProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          Login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex justify-center items-center gap-4"
        >
          <Image
            src={"/google.png"}
            alt="Login with google"
            width={24}
            height={24}
          />
          Login with google
        </button>
      </form>
    </section>
  );
}
