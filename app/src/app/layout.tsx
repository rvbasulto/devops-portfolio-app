import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FlotingIcons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DevOps & Cloud Projects Portfolio | Roberto Vazquez",
  description:
    "Explore real-world DevOps and cloud projects by Roberto Vazquez, including AWS re-architecture, infrastructure as code with Terraform, CI/CD pipelines, Kubernetes monitoring, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex flex-col h-full min-h-screen">
          {/* Main content grows to fill available space */}
          <main className="flex-1">{children}</main>
          <FloatingIcons />
          {/* Footer always sticks to the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
