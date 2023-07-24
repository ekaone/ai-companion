import Link from "next/link";

// components
import Hero from "@/components/layout/hero";
import { navs } from "@/components/ui/navs";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="z-10 mt-10 space-y-8">
        {navs.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold uppercase tracking-wide">
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
    </>
  );
}
