import { authConfig, loginIsRequiredServer } from "../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Logout from "../components/Logout";

const wait = (ms) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    // await loginIsRequiredServer();

    // const session = await getServerSession(authConfig);

    // await wait(1000);

    // if (!session) return redirect("/");

    // console.log("Session: ", session);

    const url = new URLSearchParams({
        apiKey: "35bd6dcb-6194-41d6-982d-b130cc6baf6e",
        cryptoCurrencyCode: "USDC",
        network: "algorand",
        walletAddress:
            "G7PVLWR2U6OQCRR474FVEZRYI74BAEAXZBKIFQ73V2VTBRRMDA65ZIYHKM",
        // redirectURL: "http://digicask.finance/dashboard",
        disableWalletAddressForm: true,
        email: "oluwafemialofe@gmail.com",
    });

    

    return (
        <>
            {/* {session?.user?.image && <img src={session?.user?.image} alt="" />} */}
            {/* <h3 className="text-black">Welcome: {session?.user?.email}</h3> */}
            <Logout />

            <div
                style={{
                    position: "relative",
                    width: "500px",
                    height: "80dvh",
                    margin: "auto",
                    boxShadow: "0 0 15px #1461db",
                    borderRadius: "15px",
                    overflow: "hidden",
                }}
            >
                <iframe
                    id="transakIframe"
                    src={"https://global-stg.transak.com/?" + url.toString()}
                    allow="camera;microphone;payment"
                    style={{ height: "100%", width: "100%", border: "none" }}
                ></iframe>
            </div>
        </>
    );
}
