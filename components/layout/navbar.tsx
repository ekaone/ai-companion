"use client";

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

// components
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";
import { useSignInModal } from "./sign-in-modal";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            {/* <Image
              src="/logo.png"
              alt="One Labs logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image> */}
            <p>🧩 AI companion</p>
          </Link>
          <div>
            <Link
              href="/generate"
              className="rounded-full border-2 border-black p-1.5 px-4 text-sm transition-all hover:text-gray-600"
            >
              Generate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
