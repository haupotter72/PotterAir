"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log({ currentUser });
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(213,178,211,1) 8%, rgba(217,177,209,1) 16%, rgba(205,179,214,1) 45%, rgba(196,180,217,1) 58%, rgba(223,176,208,1) 68%, rgba(148,187,233,1) 93%)",
      }}
      className="fixed w-full bg-white z-10 shadow-sm"
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
