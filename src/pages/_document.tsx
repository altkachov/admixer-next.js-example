import {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
            {/* it is important to be sure that script loaded only once. */}
            <Script src={"/admixer-header-script.js"} strategy={"afterInteractive"} />
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
