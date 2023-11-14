import { NextResponse } from "next/server";
import { authConfig } from "../../lib/auth";
import { getServerSession } from "next-auth/next";

const { FireblocksSDK, PeerType } = require("fireblocks-sdk");

const apiKey = "8def0f0c-5b4e-4421-94ad-c5cf675916ed";
const baseUrl = "https://sandbox-api.fireblocks.io";
const fireblocks = new FireblocksSDK(
    process.env.FIREBLOCKS_PRIVATE_KEY,
    apiKey,
    baseUrl
);

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
    //Do validation here

    const { email } = await request.json();

    const session = await getServerSession(authConfig);

    if (session) {
        // let vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});

        const customerRef = new Date().getTime().toString();

        //Create a vault
        const vault = await fireblocks.createVaultAccount(
            customerRef,
            false,
            "",
            true
        );

        //Create wallets: ALGO, USDC and DCASK

        // if (vault?.id) {
        //     await fireblocks.createVaultAsset(vault.id, "ALGO_TEST");
        //     await createTransaction("ALGO_TEST", 1, 0, vault.id);
        // }

        // Create when purchase is done
        // await fireblocks.createVaultAsset(7, "ALGO_USDC_2V6G");

        const balance = await fireblocks.getVaultAccountAsset(
            7,
            "ALGO_USDC_2V6G"
        );

        return NextResponse.json({
            balance: balance,
            status: 200,
        });
    }

    return NextResponse.json({
        status: 200,
    });

    return Response.json({ message: "Not authenticated" }, { status: 401 });
}

async function createTransaction(assetId, amount, srcId, destId) {
    let payload = {
        assetId,
        amount,
        source: {
            type: PeerType.VAULT_ACCOUNT,
            id: String(srcId),
        },
        destination: {
            type: PeerType.VAULT_ACCOUNT,
            id: String(destId),
        },
        note: "",
    };

    const result = await fireblocks.createTransaction(payload);

    return result;
}
