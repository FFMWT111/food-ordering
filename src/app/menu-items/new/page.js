"use client";
import { redirect } from "next/dist/server/api-utils";
import EditableImage from "../../component/layout/EditableImage";
import UserTabs from "../../component/layout/UserTabs";
import { useProfile } from "../../component/UseProfile";
import { Suspense } from "react";
import MenuItemForm from "../../component/layout/MenuItemForm";

export default function NewMenuItemPage() {
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  async function handleFormSubmit(e, data) {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items", {
        method: "POST",
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
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}
