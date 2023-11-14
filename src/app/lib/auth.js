import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/client";

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authConfig = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: {
                appleId: process.env.APPLE_ID,
                teamId: process.env.APPLE_TEAM_ID,
                privateKey: process.env.APPLE_PRIVATE_KEY,
                keyId: process.env.APPLE_KEY_ID,
            },
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Sign in with credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: "Email address",
                    type: "email",
                    placeholder: "",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: "1",
                    name: "J Smith",
                    email: "jsmith@example.com",
                };

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    pages: {
        signIn: "/",
    },
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}

// export function loginIsRequiredClient() {
//     if (typeof window !== "undefined") {
//         const session = useSession();
//         const router = useRouter();
//         if (!session) router.push("/");
//     }
// }
