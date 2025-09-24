import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/icons/logo.svg";
import dummy from "../public/assets/images/dummy.jpg";
import logout from "../public/assets/icons/logo.svg";
const user = {};
const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 className="text-2xl">Navbar</h1>
        <Link href="/">
          <Image src={logo} alt="logo" width={32} height={32} />
        </Link>
        {user && (
          <figure>
            <button>
              <Image
                src={dummy}
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer ">
              <Image src={logout} alt="logout" width={24} height={24} />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
