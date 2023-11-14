"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <div>
            <button
                onClick={signOut}
                className="mt-5 p-3 bg-blue-500 text-white rounded-md"
            >
                Sign out
            </button>
        </div>
    );
}
