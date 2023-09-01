"use client";

import React, { Fragment } from "react";
import Navbar from "../Navbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-screen">
      <Navbar />
      <div className="flex flex-grow">
        <div className="flex-grow z-10">
          <div className="flex flex-col">
            <div className="flex flex-grow">
              <main className="px-8 pb-5 md:mt-10 md:mx-10 mt-5">
                {props.children}
              </main>
            </div>
          </div>
        </div>
        <div className="max-md:hidden">
          <div className="h-[calc(100dvh-4rem)] min-w-[30rem] border-l transition-all sticky top-0">
            <PerfectScrollbar className="px-5">
              <div></div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
