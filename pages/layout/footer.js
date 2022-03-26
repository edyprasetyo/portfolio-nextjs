import React from "react";
import { useSelector } from "react-redux";
import { selectJumlahPengunjung } from "../../reducers/visitor/visitorSlice";

export default function Footer() {
    const oSelectJumlahPengunjung = useSelector(selectJumlahPengunjung);

    return (
        <div className="mt-5">
            <div className="h6 text-green text-center pt-5 pb-4">
                <span className="text-white">Visitors :</span> {oSelectJumlahPengunjung.jumlahPengunjung}
            </div>
        </div>
    );
}
