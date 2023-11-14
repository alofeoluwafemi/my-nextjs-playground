import { NextResponse } from "next/server";
import { authConfig } from "../../lib/auth";
import { getServerSession } from "next-auth/next";

export async function GET(request, response) {
    const session = await getServerSession(authConfig);

    if (session) {
        return NextResponse.json({
            status: 200,
        });
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 });
}

export async function POST(request) {
    console.log("POST", await request.json());

    return NextResponse.json({
        status: 200,
    });
}
