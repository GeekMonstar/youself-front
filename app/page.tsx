"use client";

import { authClient } from "@/lib/auth-client";
import { signInWithGoogle } from "@/lib/sign-in";
import { use, useEffect } from "react";

export default function Home() {

  // const {data: session, error} = use(authClient.getSession());
  // useEffect(()=>{
  //   console.log("Session data:", session);
  // }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithGoogle()
      .then((response) => {
        console.log("Response from signInWithGoogle:", response);
      })
      .catch((error) => {
        console.error("Error during signInWithGoogle:", error);
      });
  };
  return (
    <div>
      {/* {data && data.user.name} */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Connect with Google</button>
      </form>
    </div>
  );
}
