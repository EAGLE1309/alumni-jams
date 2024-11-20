import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { AuthsProvider } from "@/context/AuthsContext";

const satoshi = localFont({
  src: [
    {
      path: "../lib/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../lib/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/fonts/Satoshi-Medium.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata = {
  title: "Alumni Jams",
  description: "Testing alpha v1.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={` ${satoshi.variable} ${source_serif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthsProvider>
            <QueryProvider>
              <AuthProvider>{children}</AuthProvider>
              <Toaster richColors />
            </QueryProvider>
          </AuthsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
