"use client";

import { useEffect, useState } from "react";
import UserTabs from "../component/layout/UserTabs";
import Link from "next/link";
import { useProfile } from "../component/UseProfile";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function MenuItemPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link href={"/menu-items/new"} className="button flex">
          <span>Create new menu item</span>
          <ArrowRightCircleIcon className="w-6 h-6" />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-200 mt-8">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                key={item._id}
                href={"/menu-items/edit/" + item._id}
                className="bg-gray-200 rounded-lg p-4"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={"image"}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
