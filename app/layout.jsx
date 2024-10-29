import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Themeprovider";
import Header from "../components/Header";
import Footer from "../components/Footer";


const cairoFont = localFont({
  src: "./fonts/Cairo-Regular.ttf",
  variable: "--font-cairo",
  weight: "100 900",
});

export const metadata = {
  title: "Mr/Mahmoud Hagag",
  description: "Mr. Mahmoud Haggag, a high school physics teacher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
        <meta name="description" content="Mr. Mahmoud Haggag, a high school physics teacher"/>
        <meta name="keywords" content="Mr. Mahmoud Haggag ,Mahmoud Haggag , Mahmoud Haggag physics , محمود حجاج فزياء  , مستر محمود حجاج  , مستر محمود حجاج  , الحجاج , مدرس فزياء , الفزياء"/>
        <meta name="author" content="Alaa Taha"/>
      </head>
      <body
        className={`${cairoFont.variable} antialiased overflow-x-hidden`}
      >
           <ThemeProvider attribute='class' defaultTheme='light'>
         <Header/>
      
           {children}
    
        <Footer/>
       </ThemeProvider>
      </body>
    </html>
  );
}
