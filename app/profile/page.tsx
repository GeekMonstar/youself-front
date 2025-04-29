"use client";
import { authClient } from "@/lib/auth-client";

export default function Profile() {
    const {data: session, error} = authClient.useSession();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Welcome {session && session.user.name}</h1>
        <p className="mt-4">This is the profile page.</p>
        </div>
    );
}