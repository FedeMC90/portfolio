import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Federico Matias Ciociano - Portfolio",
  description: "Portfolio profesional - Desarrollador Full Stack con proyectos en Angular, JavaScript, React, Node.js, Next.js y más.",
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
