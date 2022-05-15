import Head from "next/head";
import Script from "next/script";
import React from "react";
import { useDispatch } from "react-redux";
import { setExpanded } from "../../reducers/navbar/navbarSlice";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    const dispatch = useDispatch()

    function setNavbarCollapse() {
        dispatch(setExpanded(false));
    }

    return (
        <>
            <Head>
                <title>Edy Prasetyo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/logo_1.ico" />
            </Head>
            <Script src="https://code.iconify.design/2/2.1.2/iconify.min.js" />
            <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js" />
            <Header />
            <div onClick={setNavbarCollapse}>
                {children}
            </div>

            <Footer />
        </>
    )
}