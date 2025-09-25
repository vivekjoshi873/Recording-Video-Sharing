"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/icons/logo.svg";
import dummy from "../public/assets/images/dummy.jpg";
import logout from "../public/assets/icons/logout.svg";
import { useRouter } from "next/navigation";

const user = {};
const Navbar = () => {
const router = useRouter()
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image src={logo} alt="logo" width={32} height={32} />
        </Link>
        {user && (
          <figure>
            <button onClick={()=>router.push("/profile/id/1234")}>
              <Image
                src={dummy}
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer ">
              <Image src={logout} alt="logout" width={24} height={24} className="rotate-180" />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;