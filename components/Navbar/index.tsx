import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    const { user } = useUser();
    return (
        <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-20 h-16 border-b mb-10">
            {/* logo */}
            <div className="inline-flex">
                <div className="hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={32} fill="currentcolor" style={{ display: 'block' }} viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clip-rule="evenodd" /></svg>
                </div>
                <div className="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={32} fill="currentcolor" style={{ display: 'block' }} viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clip-rule="evenodd" /></svg>
                </div>
            </div>
            {/* end logo */}
            {/* search bar */}
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-80 border rounded-full px-1  py-1" type="button">
                            <div className="block flex-grow flex-shrink overflow-hidden">Start Search Something</div>
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: 12, width: 12, stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* end search bar */}
            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    <div className="inline relative">
                        {user?.imageUrl ? (
                            <div className="px-8 py-1">
                                <img
                                    src={user.imageUrl}
                                    className="rounded-full w-10 h-10"
                                />
                            </div>
                        ) : (<div className="block flex-grow-0 flex-shrink-0 h-10 w-12 p-1">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                            </svg>
                        </div>)}
                    </div>
                </div>
            </div>
        </nav>

    );
};
export default Navbar;
