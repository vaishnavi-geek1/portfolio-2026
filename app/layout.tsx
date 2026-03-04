import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "../components/HeaderNav";

export const metadata: Metadata = {
  title: "Vaishnavi Gupta | Software Engineer – React & Next.js",
  description:
    "Portfolio of Vaishnavi Gupta, a Software Engineer specializing in React, Next.js, and modern UI development.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen">
          {/* Top navigation bar */}
          <header className="pt-6 sm:pt-8">
            <div className="section-container">
              <HeaderNav />
            </div>
          </header>

          <main className="section-container pb-12 pt-10 sm:pt-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

