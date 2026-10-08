import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "08-zustand",
  description: "08-zustand",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
