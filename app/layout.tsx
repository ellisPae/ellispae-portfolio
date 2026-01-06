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
  title: "Ellis Pae | Software Engineer",
  description:
    "Full-stack software engineer building thoughtful, modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = 'theme';
                  var stored = localStorage.getItem(key); // 'light' | 'dark' | null
                  var theme = stored;

                  if (!theme) {
                    var prefersDark =
                      window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches;

                    theme = prefersDark ? 'dark' : 'light';
                    // NOTE: we do NOT write this to storage yet — only persist after the user explicitly toggles
                  }

                  var root = document.documentElement;

                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }
                } catch (e) {
                  // fail silently
                }
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
