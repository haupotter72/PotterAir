"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineAim } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4
            rounded-full hover:bg-green-400 transition cursor-pointer"
        >
          Airbsassssssss
        </div>

        <div
          className="p-4 md:py-1 md:px-2 border-[1px]
            border-green-400 flex flex-row items-center gap-3 rounded-full
            cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineAim />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className=" absolute rounded-xl shadow-md w-[40vvw] md:w-3/4
            bg-green-400 overflow-hidden right-0 top-12 text-sm
            "
        >
          <div className="flex flex-col cursor-pointer font-bold">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="my trip" />
                <MenuItem onClick={() => {}} label="my trip" />
                <MenuItem onClick={() => {}} label="my reservation" />
                <MenuItem onClick={() => {}} label="my properties" />
                <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />

                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
