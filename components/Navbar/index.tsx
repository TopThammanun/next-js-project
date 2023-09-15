import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
    OrganizationSwitcher,
    SignedIn,
    UserButton
} from "@clerk/nextjs";
import SpinerLoading from "../SpinerLoading";
import { Button } from "@mui/material";
import useRouter from "next/router";
import {
    Swords
} from "lucide-react";

const Navbar = () => {
    const { isSignedIn, isLoaded } = useUser();
    return (
        <nav className=" bg-white w-full flex justify-between items-center mx-auto px-5 h-16 border-b sticky top-0 z-30 p-6 ">
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
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-80 border rounded-full px-1  py-1 bg-gray-50" type="button">
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
            {
                !isLoaded ? <SpinerLoading /> : (<div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                        <SignedIn>
                            <div className="mr-5 flex cursor-pointer text-gray-700 justify-center items-center" onClick={() => {
                                useRouter.push("/write");
                            }}>
                                <Swords size={25} className="mr-2" />
                                <div>Write</div>
                            </div>
                            <div className="hidden sm:block">
                                <OrganizationSwitcher afterCreateOrganizationUrl="/" />
                            </div>
                            <div className="block sm:hidden">
                                <OrganizationSwitcher
                                    afterCreateOrganizationUrl="/"
                                    appearance={{
                                        elements: {
                                            organizationSwitcherTriggerIcon: `hidden`,
                                            organizationPreviewTextContainer: `hidden`,
                                            organizationSwitcherTrigger: `pr-0`,
                                        },
                                    }}
                                />
                            </div>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        {!isSignedIn && (<Button variant="contained"
                            onClick={() => {
                                useRouter.push("/sign-in");
                            }}>Login</Button>)}
                    </div>
                </div >)
            }

        </nav >

    );
};
export default Navbar;
