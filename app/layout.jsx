import "../src/index.css";
import { HeroBrightProvider } from "../src/components/HeroBrightContext";
import { ClientLayout } from "../src/components/ClientLayout";

export const metadata = {
  title: "Intent Studios",
  description: "Web & Product Design Studio building launch-ready digital experiences and visual systems for founders, startups, and growing brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <HeroBrightProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </HeroBrightProvider>
      </body>
    </html>
  );
}
