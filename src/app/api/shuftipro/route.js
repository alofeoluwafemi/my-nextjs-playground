import { NextResponse } from "next/server";

export async function GET(request) {
    console.log("GET", await request);

    return NextResponse.json({
        status: 200,
    });
}

export async function POST(request) {
    console.log("POST", await request.json());

    return NextResponse.json({
        status: 200,
    });
}
