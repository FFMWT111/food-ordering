"use client";
import { redirect } from "next/dist/server/api-utils";
import EditableImage from "../../../component/layout/EditableImage";
import UserTabs from "../../../component/layout/UserTabs";
import { useProfile } from "../../../component/UseProfile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MenuItemForm from "../../../component/layout/MenuItemForm";
import { resolve } from "path";
import DeleteButton from "../../../component/DeleteButton";

export default function EditMenuItemPage() {
  const [menuItem, setMenuItem] = useState(null);
  const [redirectToItems, setRedirectToItems] = useState(false);

  const { loading, data } = useProfile();
  const { id } = useParams;

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(e, data) {
    e.preventDefault();
    data = { _id: id, ...data };
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving this tasty item",
      success: "Saved",
      error: "Error",
    });
    setRedirectToItems(true);
  }

  async function handleDelete() {
    const promise = new Promise(async (resolve, reject) => {
      const res = fetch("/api/menu-items?_id=" + id, {
        method: "DELTE",
      });
      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(promise, {
      loading: "Deleting...",
      success: "Deleted",
      error: "Error",
    });
    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={"/menu-items"} className="button">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2">
        <div className="max-w-xs ml-auto pl-4">
          <DeleteButton label="Delete this menu item" onClick={handleDelete} />
        </div>
      </div>
    </section>
  );
}
