"use client";
// import { getServerSession } from "next-auth";
// import { authConfig } from "./lib/auth";
// import Credential from "./components/Credential";
// import GoogleAuth from "./components/GoogleAuth";
// import { redirect } from "next/navigation";
import StepWizard from "react-step-wizard";

export default async function App() {
    // const session = await getServerSession(authConfig);

    // if (session) return redirect("/protected");

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <StepWizard>
                <>
                    <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                        <>
                            <h1 className="text-xl font-bold">
                                You are not signed in : Step 1
                            </h1>

                            {/* <Credential />
                    <h4 className="mt-4">OR</h4>
                    <GoogleAuth /> */}
                        </>
                    </div>
                </>
                <>
                    <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                        <>
                            <h1 className="text-xl font-bold">
                                You are not signed in : Step 2
                            </h1>

                            {/* <Credential />
                    <h4 className="mt-4">OR</h4>
                    <GoogleAuth /> */}
                        </>
                    </div>
                </>
            </StepWizard>
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <>
                    <h1 className="text-xl font-bold">You are not signed in</h1>

                    {/* <Credential />
                    <h4 className="mt-4">OR</h4>
                    <GoogleAuth /> */}
                </>
            </div>
        </div>
    );
}
