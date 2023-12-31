import "../globals.css";
import cx from "classnames";
import { sfPro, inter } from "../fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "One Labs - Digital assistant",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
