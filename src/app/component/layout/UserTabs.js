"use client";
import Link from "next-auth";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex justify-center mx-auto gap-2 tabs">
      <Link href={"/profile"} className={path === "/profile" ? "active" : ""}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href={"/categories"}
            className={path === "/categories" ? "active" : ""}
          >
            categories
          </Link>
          <Link
            href={"/menu-items"}
            className={path.includes("menu-items") ? "active" : ""}
          >
            Menu Items
          </Link>
          <Link href={"/users"} className={path.includes('/users') ? "active" : ""}>
            Users
          </Link>
          <Link href={"/orders"} className={path === "/orders" ? "active" : ""}>
            Orders
          </Link>
        </>
      )}
    </div>
  );
}
