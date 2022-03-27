import React from "react";
import { useSelector } from "react-redux";
import { visitorData } from "../../reducers/visitor/visitorSlice";
import Loading from "./preloader";

export default function Footer() {
    const oVisitorData = useSelector(visitorData);
    return (
        <>
            <Loading isLoading={oVisitorData.loading}></Loading>
            <div className="mt-5">
                <div className="h6 text-green text-center pt-5 pb-4">
                    <span className="text-white">Visitors :</span> {oVisitorData.jumlahPengunjung}
                </div>
            </div>
        </>
    );
}
