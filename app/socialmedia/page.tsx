import React from "react";
import Link from "next/link";

// components
import { templates } from "@/components/ui/templates";

function Page() {
  return (
    <div>
      <div className="space-y-8">
        {templates.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-200 px-5 py-3 hover:bg-gray-400"
                    >
                      <div className="font-medium group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm group-hover:text-gray-50">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
