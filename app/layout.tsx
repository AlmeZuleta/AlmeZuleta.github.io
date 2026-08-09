import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Palacio Hacienda Quilpué | Almendra Zuleta Díaz";
const siteDescription =
  "Itinerario de memoria patrimonial por las ruinas del Palacio Hacienda Quilpué, investigación de Almendra Zuleta Díaz para el Magíster en Patrimonio.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1680,
        height: 920,
        alt: "Palacio Hacienda Quilpué, memoria patrimonial, Almendra Zuleta Díaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
