"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "../AppContext";
import Trash from "../icon/Trash";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/"} className="text-primary font-bold text-2xl">
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#contact"}>Contact</Link>
      </nav>
      <nav className="flex gap-4 items-center text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello,{userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white rounded-full px-6 py-2"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary text-white rounded-full px-6 py-2"
            >
              Register
            </Link>
          </>
        )}
        {cartProducts?.length > 0 && (
          <Link href={"/cart"}>
            <Trash />
            <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
              {cartProducts.length}
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
}
