import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Edy Prasetyo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/logo_1.ico" />

                <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>


                <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>

                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

            </Head>
            <Header />
            {children}
            <Footer />

            <script>
                AOS.init();
            </script>
        </>
    )
}