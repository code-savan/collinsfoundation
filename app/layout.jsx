import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: 'swap',
});

export const metadata = {
  title: "Collins Onyeaji Foundation | Education, Agriculture & Healthcare",
  description: "Empowering remote communities in Eastern Nigeria through education, sustainable agriculture, and quality healthcare initiatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
