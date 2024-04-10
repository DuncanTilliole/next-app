"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Session } from "@/types/session";

type Props = {
    icon?: React.ReactNode;
    label: string;
};

type PropsNavBar = {
  session: Session | null
}

function Navbar({ session }: PropsNavBar) {

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="flex flex-col items-center">
        <nav className="mb-4">
          <NavItem label="Home" />
        </nav>
      </div>
      <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
        <img
          className="h-8 w-8 rounded-full"
          src={session?.user?.image}
          alt="User profile"
        />
        <span onClick={() => signOut()}>Logout</span>
      </button>
    </div>
  );
}

const NavItem = ({ icon, label }: Props) => (
  <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-4 flex items-center space-x-2">
    {icon}
    <span>{label}</span>
  </div>
);

export default Navbar;