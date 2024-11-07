import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ContextGlobal } from "@/components/ContextGlobal";
import { fetchProducts } from "@/data/FetchProducts";
import { Cart } from "@/components/Cart"


export const metadata = {
  title: "Store Api",
  description: "Application generated from the Fake Store Api.",
};

export default async function RootLayout({ children }) {
  const data = await fetchProducts()
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <ContextGlobal initialData={data}>
          <Navbar></Navbar>
          {children}
          <Cart></Cart>
        </ContextGlobal>
      </body>
    </html>
  );
}


