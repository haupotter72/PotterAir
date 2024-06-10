"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
       <Image
      onClick={() => router.push("/")}
      alt="logo"
      width="120"
      height="120"
      className="hidden md:block cursor-pointer "
      src="/images/logo.png"
    ></Image> 


    </div>
   
  );
};

export default Logo;
