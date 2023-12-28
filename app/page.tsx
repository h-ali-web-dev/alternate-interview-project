"use client";

import { useState } from "react";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import Sidebar from "./Components/sidebar";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  function onOptionChange(val: boolean) {
    setIsClient(val);
  }
  return (
    <main className="">
      <div className="flex flex-row pl-16 bg-contentGrey">
        <div className="w-7/12  flex flex-col">
          <div className="flex-none">
            <NavBar />
          </div>
          <div className=" flex flex-grow items-center justify-center mr-10">
            <Content isClient={isClient} onChange={onOptionChange} />
          </div>
          <div className="flex-none">
            <Footer />
          </div>
        </div>
        <div className="w-5/12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
