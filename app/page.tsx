import Balancer from "react-wrap-balancer";
import { Twitter } from "@/components/shared/icons";
import CardList from "@/components/home/card-list";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>AI Building blocks for your Next project</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Companion app for your digital assistant and co-worker.
          </Balancer>
        </p>
        <a
          href="https://twitter.com/twekaone"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 mt-6 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Companion
          </p>
        </a>
      </div>
      <div className="z-10 w-full max-w-5xl px-5 xl:px-0">
        <CardList />
      </div>
    </>
  );
}
