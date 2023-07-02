import { Twitter } from "@/components/shared/icons";
import { Github } from "@/components/shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <a
        className="mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-300 bg-white px-7 py-2 transition-colors hover:border-gray-800"
        href="https://github.com/ekaone/ai-companion.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p>
          <span className="hidden sm:inline-block">GitHub</span>
        </p>
      </a>
    </div>
  );
}
