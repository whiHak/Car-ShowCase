import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CustomButton from "./CustomButton";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-between"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xl">
            <NavItems/>
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <CustomButton
                title="Sing In"
                btnType="button"
                btnStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              />
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
