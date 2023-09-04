import { SignIn } from "@clerk/nextjs";
import React, { ReactElement } from "react";
import LayoutOnlyLogo from "@/components/Layout/LayoutOnlyLogo";

export default function Index() {
    return (
        <div>
            <SignIn />
        </div>
    );
}

Index.getLayout = (page: ReactElement) => {
    return <LayoutOnlyLogo>{page}</LayoutOnlyLogo>;
};