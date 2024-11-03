import { NAV_LINKS } from "@/constants";
import Button from "@/constants/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container z-30 py-5">
      <Link href={"/"}>
        <Image
          className=""
          src={"/hilink-logo.svg"}
          alt="logo"
          width={74}
          height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter ">
        <Button
          type="button"
          title="Log in"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger Menu button in small devices */}
      <Image src={"/menu.svg"} alt="menu" width={32} height={32} className=" inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
};

export default Navbar;
