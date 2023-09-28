import React, { Fragment } from "react";
interface CubeStyle {
    '--i': number;
}

const FullLoading = () => {
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-90">
            <div className="cube">
                <div className="topD"></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="cube2">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="cube3">
                        <div className="top3"></div>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullLoading;
