import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSpace - Learning & Creator Platform",
  description: "Get access to hundreds of courses available",
  icons: {
    icon: "/assets/logo.png",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global SVG Color Tint Filter for Electric Neon Lime #D3F832 */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <filter id="lime-tint" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1.35 0 0 0 0.12
                0 1.55 0 0 0.15
                0 0 0.35 0 0.02
                0 0 0 1 0
              "
            />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
