import React, { Fragment } from "react";
import Navbar from "../Navbar";
import SlideBar from "../SlideBar";
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
              <main className="px-8 pb-5 md:mt-10 lg:mx-72 mt-5">
                {props.children}
              </main>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden">
          <div className="h-[100dvh] min-w-[25rem] border-l transition-all sticky top-0">
            <SlideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
