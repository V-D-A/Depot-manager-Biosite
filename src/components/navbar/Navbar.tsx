"use client";

import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { HelpCircle, Settings, Bell,  Menu, UserCircle } from "lucide-react";
// import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navBar}`}>
      {/* Upper Navbar */}
      <div
        className={`${styles.uppernav} flex items-center justify-end gap-3 text-2xl p-3`}
      >
        <HelpCircle size={24} className="cursor-pointer text-[#2B3A67] fill-white" />
        <Settings size={24} className="cursor-pointer text-[#2B3A67] fill-white" />
        <Bell size={24} className="cursor-pointer text-[#2B3A67] fill-white" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" bg-white p-0 mr-4 rounded-full focus:outline-none ">
              <UserCircle
                size={24}
                className="cursor-pointer text-[#2B3A67] fill-white"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-gray-100 rounded-xl shadow-md">
            <DropdownMenuItem
              asChild
              className="font-semibold cursor-pointer hover:bg-gray-200"
            >
              <Link href="/edc/account">Go to Account</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 bg-gray-300" />
            <DropdownMenuItem
              asChild
              className="cursor-pointer hover:bg-gray-200"
            >
              <Link href="/logout">Log Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Lower Navbar */}
      <div className={styles.lowernav}>
        <Menu size={20} className="cursor-pointer text-[#565D6D]" />
        <Link href={""} className={styles.activeNav}>
          Warehouse
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
