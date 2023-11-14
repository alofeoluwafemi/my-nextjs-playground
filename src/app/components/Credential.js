"use client";
import { getCsrfToken } from "next-auth/react";
import { useState } from "react";

export default function Credential() {
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const signInResponse = await signIn("credentials", {
            email,
            password,
            callbackUrl: process.env.NEXTAUTH_REDIRECT_URL,
        });
    };

    return (
        <form
            className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
            onSubmit={handleSubmit}
        >
            {error && (
                <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
                    {error}
                </span>
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <button
                type="submit"
                className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >
                Log in
            </button>
        </form>
    );
}
