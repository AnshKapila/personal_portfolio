import "../src/index.css";
import { HeroBrightProvider } from "../src/components/HeroBrightContext";
import { ClientLayout } from "../src/components/ClientLayout";

export const metadata = {
  title: "Ansh Kapila | Product & UI/UX Designer",
  description: "Personal design portfolio of Ansh Kapila, a Product and UI/UX Designer crafting structured, high-performing digital experiences, design systems, and interfaces.",
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
