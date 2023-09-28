import React, { Fragment } from "react";

const FullLoading = () => {
    return (
        <div className="fixed z-50 h-screen w-screen bg-opacity-90 top-0">
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default FullLoading;
