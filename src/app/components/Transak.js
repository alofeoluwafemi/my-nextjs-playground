"use client";
import React, { useEffect } from "react";
import transakSDK from "@transak/transak-sdk";

export default function Transak() {
    let transak = new transakSDK({
        apiKey: "", // (Required)
        environment: "STAGING", // (Required)
    });

    useEffect(() => {
        // transak.init();

        // // Cleanup code
        // return () => {
        //     transak.close();
        // };
    }, []);

    return <div>Transak</div>;
}
