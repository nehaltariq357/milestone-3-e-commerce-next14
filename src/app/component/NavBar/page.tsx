"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
const NavBar = () => {
  const [isopen, setopen] = useState(false);
  return (
    <main className="">
      <div className="flex justify-around items-center h-16">
        <ul className="flex gap-5 items-center">
          <li>
            <Image src={`/images/logo.png`} alt="logo" width={40} height={50} />
          </li>
          <Link href={`/`}>
            <li className="font-bold text-2xl cursor-pointer">E-Commerce</li>
          </Link>
        </ul>
        <div>
          <ul className="hidden md:flex gap-10 items-center ">
            <Link href={`/`}>
              {" "}
              <li className="hover:text-purple-600 cursor-pointer">Home</li>
            </Link>
            <Link href={`/product`}>
              {" "}
              <li className="hover:text-purple-600 cursor-pointer">Product</li>
            </Link>
            <Link href={`/component/About`}>
              <li className="hover:text-purple-600 cursor-pointer">About</li>
            </Link>
            <Link href={`/component/Contact`}>
              <li className="bg-customGreen text-white px-10 py-3 rounded-md text-sm cursor-pointer hover:bg-green-900">
                Contact
              </li>
            </Link>
          </ul>
          <ul
            onClick={() => setopen(!isopen)}
            className="md:hidden cursor-pointer"
          >
            <GiHamburgerMenu />
          </ul>
        </div>

        {/* mobile menu */}
        {isopen && (
          <div className="md:hidden gap-10 absolute top-16 bg-white w-full px-5 h-36">
            <ul className="font-semibold gap-y-2 flex flex-col">
              <Link href={`/`}>
                {" "}
                <li className="hover:text-purple-600 cursor-pointer">Home</li>
              </Link>
              <Link href={`/blog`}>
                {" "}
                <li className="hover:text-purple-600 cursor-pointer">Blog</li>
              </Link>
              <Link href={`/component/About`}>
                <li className="hover:text-purple-600 cursor-pointer">About</li>
              </Link>
              <Link href={`/component/Contact`}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default NavBar;
