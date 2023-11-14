"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function GoogleAuth() {
    return (
        <button
            onClick={() => {
                signIn("google");
            }}
            className="mt-5 p-3 bg-blue-500 text-white rounded-md"
        >
            Sign in with Google
        </button>
    );
}
