"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      setCreatingUser(false);
      setCreated(true);
      setError(false);
    } else {
      setCreatingUser(false);
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-6">
      <h1 className="text-primary text-4xl text-center mb-6">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created. Now you can
          <Link href={"/login"} className="underline font-semibold pl-2">
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again later.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          Login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex justify-center items-center gap-4"
        >
          <img
            src={"/google.png"}
            alt="Login with google"
            width={24}
            height={24}
          />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link href={"/login"} className="underline">
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
