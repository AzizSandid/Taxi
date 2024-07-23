import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = Poppins({
   subsets: ["latin"] ,
   weight: ["400", "700"] // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Taxi العائلة",
  description: "Taxi العائلة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body
      className={`${poppins.className} bg-white overflow-x-hidden relative z-0 flex flex-col `}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  );
}
