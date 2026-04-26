import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nudge App",
  description: "Create text wallpapers to keep goals in sight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
