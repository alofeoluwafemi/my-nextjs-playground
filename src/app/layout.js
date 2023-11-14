import { Inter } from "next/font/google";
import "./globals.css";
// import { NextAuthProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next Playground",
    description: "my nextjs playground",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                suppressHydrationWarning={true}
                style={{ background: "#fff" }}
            >
                {/* <NextAuthProvider>{children}</NextAuthProvider> */}
                {children}
            </body>
        </html>
    );
}
