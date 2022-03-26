import Image from 'next/image';
import React from "react";

function Loading({ isLoading }) {
    return isLoading ? (
        <div className="pre-loader">
            <div className="sk-fading-circle">
                <Image id="imgPreloader" className="rotate" src="/images/logo.png" alt='app logo' />
            </div>
        </div>
    ) : (<span></span>);
}

export default Loading;