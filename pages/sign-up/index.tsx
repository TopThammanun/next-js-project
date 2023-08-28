import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Index() {
    return (
        <div className="flex justify-center py-24">
            <SignUp />
        </div>
    );
}
