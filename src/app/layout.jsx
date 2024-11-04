import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ContextGlobal } from "@/components/ContextGlobal";
import { fetchProducts } from "@/data/FetchProducts";
import { Cart } from "@/components/Cart"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const data = await fetchProducts()
  return (
    <html lang="es">
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


