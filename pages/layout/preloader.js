import React from "react";

function Loading({ isLoading }) {
    return isLoading ? (<span></span>) : (
        <div className="pre-loader">
            <div className="sk-fading-circle">
                <img id="imgPreloader" className="rotate" src="/images/logo.png" />
            </div>
        </div>
    );
}

export default Loading;