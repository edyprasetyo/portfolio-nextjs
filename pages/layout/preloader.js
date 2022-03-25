import React from "react";

function Loading({ isLoading }) {
    return isLoading ? (
        <div className="pre-loader">
            <div className="sk-fading-circle">
                <img id="imgPreloader" className="rotate" src="/images/logo.png" />
            </div>
        </div>
    ) : (<span></span>);
}

export default Loading;