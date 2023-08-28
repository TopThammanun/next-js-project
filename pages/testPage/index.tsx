import { useUser } from "@clerk/nextjs";
import React from "react";

const TestPage = () => {
    const { user } = useUser();
    return (
        <div className="px-8 py-12 sm:py-16 md:px-20">
            👋 Hi, {user?.fullName || `Stranger`}
        </div>
    );
}

export default TestPage;
