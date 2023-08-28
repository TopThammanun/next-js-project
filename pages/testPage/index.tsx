import { useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const TestPage = () => {
    const { userId, sessionId, getToken, actor } = useAuth();
    const { isSignedIn, user } = useUser();
    return (
        <div className="px-8 py-12 sm:py-16 md:px-20">
            👋 Hi, {user?.fullName || `Stranger`}
        </div>
    );
}

export default TestPage;
