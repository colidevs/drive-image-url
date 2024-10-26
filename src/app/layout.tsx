import type {Metadata} from "next";

import "./globals.css";
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Drive Image Url 📸 | colidevs",
  description:
    "Take your google drive image url, easily. 1. Paste your google drive link. 2. Click the button. 3. Copy the image link.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <div className="grid min-h-screen grid-rows-[1fr,auto]">
          <main>{children}</main>
          <Toaster />
          <footer className="text-center leading-[4rem] opacity-70">
            © {new Date().getFullYear()} colidevs | Drive Image Url 📸
          </footer>
        </div>
      </body>
    </html>
  );
}
