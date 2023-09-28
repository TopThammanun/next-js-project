import React, { Fragment } from "react";

const FullLoading = () => {
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-90">
            <div className="cube">
                <div className="topD"></div>
                <div>
                    <span style={{ '--i': 0 }}></span>
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>

                <div className="cube2">
                    <div>
                        <span style={{ '--i': 0 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 3 }}></span>
                    </div>

                    <div className="cube3">
                        <div className="top3"></div>
                        <div>
                            <span style={{ '--i': 0 }}></span>
                            <span style={{ '--i': 1 }}></span>
                            <span style={{ '--i': 2 }}></span>
                            <span style={{ '--i': 3 }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullLoading;
