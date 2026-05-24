import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Leticia Terceiro | Estética Facial & Corporal Avançada",
  description: "Tratamentos estéticos de alta tecnologia. Botox, Preenchimento Labial, Bioestimuladores de Colágeno, Endolaser e rejuvenescimento sob o cuidado da especialista Leticia Terceiro. Agende sua consulta.",
  keywords: "estética facial, estética corporal, botox, preenchimento labial, colágeno, endolaser, leticia terceiro, clínica de estética, harmonização facial",
  openGraph: {
    title: "Leticia Terceiro | Estética Facial & Corporal Avançada",
    description: "Tratamentos estéticos premium baseados em ciência e tecnologia para realçar sua beleza natural.",
    images: [{ url: "/images/hero.png" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>{children}</body>
    </html>
  );
}
