import "../globals.css";

export const metadata = {
  title: "Generate",
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

export default async function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
