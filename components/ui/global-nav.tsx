"use client";

import { navs, type TNavs } from "@/components/ui/navs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-white lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-200">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/dashboard"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30">🚠</div>

          <h3 className="font-semibold tracking-wide">Dashboard</h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium">Menu</div>
        {isOpen ? (
          <XMarkIcon className="block w-6" />
        ) : (
          <Bars3Icon className="block w-6" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-white": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          {navs.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1 px-2">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: TNavs;
  close: () => false | void;
}) {
  const segment = usePathname();
  const isActive = item.slug === segment.split("/")[1];

  useEffect(() => {
    console.log("segment", segment);
  }, []);

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-700",
        {
          "text-gray-600 hover:bg-gray-200": !isActive,
          "text-indigo-500": isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
