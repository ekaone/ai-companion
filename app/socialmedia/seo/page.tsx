import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr,1.5fr]">
      <div className="border p-10">
        <div className="sticky top-10">
          <div>
            <Link
              href="/dashboard"
              className="group inline-flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-4 text-sm font-medium text-gray-700 hover:border-purple-600 hover:text-blue-700 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300"
            >
              ⬅️ Back
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium tracking-tight text-gray-500 hover:bg-gray-100 hover:text-purple-600 focus:outline-0 focus:ring-2 focus:ring-purple-400"
            >
              View Source ↗️
            </Link>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Template name</h2>
          <div className="mt-5 space-y-2 text-sm text-gray-600">
            <p className="flex items-center">📸 Prompt</p>
            <p className="flex items-center">🗺️ Context</p>
            <p className="flex items-center">🗓️ Zero-shot</p>
          </div>
          <div className="mt-5 space-y-5 text-sm text-gray-500">
            Lorem impsum
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden border p-10">
        Generated contents here
      </div>
    </div>
  );
}

export default Page;
