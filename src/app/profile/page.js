"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import UserTabs from "../component/layout/UserTabs";
import UserForm from "../component/layout/UserForm";
import { Suspense } from "react";
import InfoBox from "../component/layout/InfoBox";
import SuccessBox from "../component/layout/SuccessBox";
import EditableImage from "../component/layout/EditableImage";

export default function ProfilePage() {
  const session = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((res) => {
        res.json().then((data) => {
          setUser(data), setIsAdmin(data.admin), setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  async function updateProfileInfo(e, data) {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      });
      if (res.ok) resolve();
      else reject();

      await toast.promise(savingPromise, {
        loading: "Saving...",
        success: "Profile saved!",
        error: "Error",
      });
    });
  }

  if (status === "loading" || !profileFetched) {
    return "loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <setion className="mt-6">
      {/* <Suspense> */}
      <UserTabs isAdmin={isAdmin} />
      {/* </Suspense> */}
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={updateProfileInfo} />
        {/* {saved && <SuccessBox>Profile saved!</SuccessBox>}
        {isSaving && <InfoBox>Saving...</InfoBox>} */}
        {/* {isUploading && <InfoBox>Uploading...</InfoBox>} */}
      </div>
    </setion>
  );
}
