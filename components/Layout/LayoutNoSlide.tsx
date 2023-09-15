import React, { Fragment } from "react";
import Navbar from "../Navbar";
import SlideBar from "../SlideBar";
type Props = {
    children: React.ReactNode;
    className?: string;
};

const LayoutNoSlide = (props: Props) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Navbar />
            <div className="z-10">
                <div className="flex flex-col max-w-[100dvw]">
                    <div className="flex flex-grow justify-center w-full">
                        <main className="flex pb-5 md:mt-10 lg:mx-72 mt-5 justify-center w-2/3">
                            {props.children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutNoSlide;
