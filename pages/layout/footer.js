import React, { useEffect, useState } from "react";

export default function Footer() {

    const [jumlahPengunjung, setJumlahPengunjung] = useState(0);

    useEffect(() => {
        fetch('/api/layout/footer')
            .then((res) => res.json())
            .then((data) => {
                setJumlahPengunjung(data.oUtillog.JumlahPengunjung);
            })
    }, [])

    return (
        <div className="pt-5">
            <div className="h6 text-green text-center pt-5 pb-4">
                <span className="text-white">Visitors :</span> {jumlahPengunjung}
            </div>
        </div>
    );
}
