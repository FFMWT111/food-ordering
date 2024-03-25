"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import UserTabs from "../component/layout/UserTabs";
import UserForm from "../component/layout/UserForm";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const session = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  console.log(session);

  const { status } = session;

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session?.data.user.image;

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     fetch("/api/profile", {
  //       method: "GET", // other options: POST, PUT, DELETE, etc.
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser(data);
  //         setIsAdmin(data.admin);
  //         setProfileFetched(true);
  //       });
  //   }
  // }, [session, status]);

  // async function updateProfileInfo(e, data) {
  //   e.preventDefault();
  //   const savingPromise = new Promise(async (resolve, reject) => {
  //     const res = await fetch("/api/profile", {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         data,
  //       }),
  //     });
  //     if (res.ok) resolve();
  //     else reject();

  //     await toast.promise(savingPromise, {
  //       loading: "Saving...",
  //       success: "Profile saved!",
  //       error: "Error",
  //     });
  //   });
  // }

  // if (status === "loading" || !profileFetched) {
  //   return "loading...";
  // }

  // if (status === "unauthenticated") {
  //   return redirect("/login");
  // }

  return (
    <section className="mt-8">
      {/* <UserTabs isAdmin={isAdmin} />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={updateProfileInfo} />
      </div> */}
      <h1 className="text-primary text-4xl text-center mb-6">Profile</h1>
      <form className="max-w-xs mx-auto border">
        <div>
          <Image src={userImage} width={64} height={64} alt="avator" />
        </div>
      </form>
    </section>
  );
}
