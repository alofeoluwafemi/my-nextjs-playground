"use client";
import React, { useEffect } from "react";
import transakSDK from "@transak/transak-sdk";

export default function Transak() {
    let transak = new transakSDK({
        apiKey: "35bd6dcb-6194-41d6-982d-b130cc6baf6e", // (Required)
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
