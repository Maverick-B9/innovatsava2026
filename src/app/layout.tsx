import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Innovotsava 2026 | National Level Technology Festival",
  description:
    "Official handbook for Innovotsava 2026 - A convergence of robotics, drone challenges, gaming, business conclave, and cultural celebration. Organized by the Stack Forge Club, Department of CSE, Maharaja Institute of Technology Mysore.",
  keywords: [
    "Innovotsava 2026",
    "MIT Mysore",
    "Stack Forge Club",
    "Robotics Competition",
    "Drone Challenge",
    "Hackathon",
    "Capital Clash",
    "National Level Technology Festival",
  ],
  icons: {
    icon: "/assets/innovotsava.png",
    apple: "/assets/innovotsava.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050505] text-[#e2e8f0] font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

