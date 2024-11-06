"use client"
import { ContextTienda } from "@/context/ContextProducts";
import styles from "@/styles/navbar.module.css"
import Link from "next/link";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const { searchValue, filteredSearch,
    handleInput, setSearchValue,
    cart, setMenu, menu } = useContext(ContextTienda)

  console.log(menu)

  return (
    <>
      <nav className={styles.header}>
        <ul className={styles.header__title}>
          <li>Tienda Api Real Fake</li>
        </ul>
        <div className={styles.header__search}>
          <div className={styles.header__div}>
            <input type="text" placeholder='Buscar Producto'
              value={searchValue}
              onChange={handleInput}
            />
          </div>
          <section className={styles.searchFilter}>
            <ul>
              {
                filteredSearch.map(item => (
                  <li key={item.id}><Link className={styles.a} href={"/products/[productId]"} as={`/products/${item.id}`} onClick={() => setSearchValue("")}>{item.title}</Link></li>
                ))
              }
            </ul>
          </section>
        </div>

        <button className={styles.button__Cart} onClick={() => setMenu(!menu)}><FaShoppingCart /> <span className={styles.button__span}>{cart.length}</span></button>
      </nav>

    </>
  )
}
