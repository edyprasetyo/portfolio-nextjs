import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJumlahPengunjung, visitorData } from "../../reducers/visitor/visitorSlice";
import Loading from "./preloader";

export default function Footer() {
    const dispatch = useDispatch()
    const oVisitorData = useSelector(visitorData);

    useEffect(() => {
        dispatch(fetchJumlahPengunjung());
    }, []);

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
