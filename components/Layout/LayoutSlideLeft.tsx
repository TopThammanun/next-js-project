import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../Navbar";
import SlideBarPost from "../SlideBar/SlideBarPost";
type Props = {
    children: React.ReactNode;
    className?: string;
};

const LayoutSlideLeft = (props: Props) => {
    return (
        <div className="flex flex-col min-h-[100dvh] max-w-screen">
            <Navbar />
            <div className="flex flex-grow">
                <div className="max-lg:hidden">
                    <div className="h-[100dvh] min-w-[25rem] border-r transition-all sticky top-0">
                        <SlideBarPost />
                    </div>
                </div>
                <div className="z-10">
                    <div className="flex flex-col max-w-[100dvw]">
                        <div className="flex flex-grow justify-center w-full">
                            <main className="flex pb-5 md:mt-10 lg:mx-48 mt-5 justify-center">
                                {props.children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutSlideLeft;
