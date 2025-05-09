import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { EnvVarWarning } from "@/components/env-var-warning";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ReZoom - Resume Tailoring Made Easy",
  description:
    "The AI-powered resume tailoring tool that helps you land your dream job faster.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            {/* Show warning if env vars are missing, otherwise show custom header */}
            {!hasEnvVars ? <EnvVarWarning /> : null}
            <Header />

            <div className="flex-1 w-full flex flex-col">
              <div className="flex flex-col gap-20 max-w-5xl p-5 mx-auto">
                {children}
              </div>
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
