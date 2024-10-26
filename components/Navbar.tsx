"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteMeta } from "@/constants/metadata";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

        <Link href="/" >
          <Image
            src="/infinity-white.png"
            alt="NPGenX Logo"
            height={30}
            width={30}
            sizes="100vw"
            className="mx-5"
          />
        </Link>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open(`mailto:${siteMeta.contact}`)}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;