import React from "react";
import useRouter from "next/router";

const NavbarOnlyLogo = () => {
    return (
        <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-5 h-16 border-b">
            <div className="inline-flex cursor-pointer"
                onClick={() => {
                    useRouter.push("/");
                }}>
                <div className="hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={32} fill="currentcolor" style={{ display: 'block' }} viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clip-rule="evenodd" /></svg>
                </div>
                <div className="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={32} fill="currentcolor" style={{ display: 'block' }} viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clip-rule="evenodd" /></svg>
                </div>
            </div>
        </nav>

    );
};
export default NavbarOnlyLogo;
