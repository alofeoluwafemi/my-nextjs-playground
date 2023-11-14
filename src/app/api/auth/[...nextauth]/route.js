import { authConfig } from "../../../lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authConfig);

// export default handler;
export { handler as GET, handler as POST };
