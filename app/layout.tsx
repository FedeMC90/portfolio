import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Federico MC - Portfolio",
  description: "Portfolio profesional de Federico MC - Desarrollador Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
