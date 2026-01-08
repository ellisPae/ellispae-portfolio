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
    "Full-stack software engineer building clean, modern, and meaningful digital experiences.",
  metadataBase: new URL("https://www.ellispae.com"),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Ellis Pae | Software Engineer",
    description:
      "Full-stack software engineer building clean, modern, and meaningful digital experiences.",
    url: "https://www.ellispae.com",
    siteName: "Ellis Pae",
    images: [
      {
        url: "/Ellis_Pae_Portfolio_Profile_Pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Ellis Pae — Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellis Pae | Software Engineer",
    description:
      "Full-stack software engineer building clean, modern, and meaningful digital experiences.",
    images: ["/Ellis_Pae_Portfolio_Profile_Pic.jpeg"],
  },
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
