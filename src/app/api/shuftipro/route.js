import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth/next";

export async function GET(request) {
    return NextResponse.json({
        status: 200,
    });
}

export async function POST(request) {
    // console.log("POST", await request.json());

    return NextResponse.json({
        status: 200,
    });
}
