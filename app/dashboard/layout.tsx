import "../globals.css";
import cx from "classnames";
import { Suspense } from "react";

// components
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { sfPro, inter } from "../fonts";
import { GlobalNav } from "@/components/ui/global-nav";

export const metadata = {
  title: "Dashboard - One Labs",
  description: "Digital assistant for your daily tasks.",
  twitter: {
    card: "summary_large_image",
    title: "One Labs - Digital assistant",
    description: "Digital assistant for your daily tasks.",
    creator: "@twekaone",
  },
  metadataBase: new URL("https://1labs4.us"),
  themeColor: "#FFF",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-2">
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-12">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
