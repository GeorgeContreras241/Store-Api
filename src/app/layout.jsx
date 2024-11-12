"use client"
import { Provider, useDispatch } from "react-redux";
import store from "@/redux/store"
import "./globals.css";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Cart } from "@/components/Cart";
/*
export const metadata = { 
  title: "Store Api",
  description: "Application generated from the Fake Store Api.",
};
*/


export default function RootLayout({ children }) { 
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Provider store={store}>
          <Navbar></Navbar>
          {children}
          <Cart></Cart>
        </Provider>
      </body>
    </html>
  );
}


