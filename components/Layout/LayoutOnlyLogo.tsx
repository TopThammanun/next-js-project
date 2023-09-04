import React, { Fragment } from "react";
import NavbarOnlyLogo from "../Navbar/NavbarOnlyLogo";
type Props = {
    children: React.ReactNode;
    className?: string;
};

const LayoutOnlyLogo = (props: Props) => {
    return (
        <div className="flex flex-col min-h-[100dvh] max-w-screen">
            <NavbarOnlyLogo />
            <div className="flex flex-grow items-center">
                <div className="flex-grow z-10">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-grow">
                            <main className="px-8 pb-5 md:mt-10 lg:mx-72 mt-5">
                                {props.children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutOnlyLogo;
