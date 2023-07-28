import "../globals.css";

// components
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

export default async function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll pb-36">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-5xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-12">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
