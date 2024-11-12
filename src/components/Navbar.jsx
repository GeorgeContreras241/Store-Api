"use client"
import { handleMenu } from "@/redux/menuSlice";
import { filterUser } from "@/redux/userSlice";
import styles from "@/styles/navbar.module.css"
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false)
  const {filterSearch, cart} = useSelector((state)=> state.user)
  
  const [searchValue, setSearchValue] = useState("")
  const handleInput = (event) => {
    setSearchValue(event.target.value)
    dispatch(filterUser(searchValue))
  }
  const handleMen = () => {
    const updateMenu = !menu;
    setMenu(updateMenu)
    dispatch(handleMenu(updateMenu))

  }

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
                searchValue !== ""?filterSearch.map(item => (
                  <li key={item.id}><Link className={styles.a} href={"/products/[productId]"} 
                  as={`/products/${item.id}`} 
                  onClick={() => setSearchValue("")}>{item.title}</Link></li>
                )): ""
              }
            </ul>
          </section>
        </div>

        <button className={styles.button__Cart} onClick={handleMen}><FaShoppingCart /> <span className={styles.button__span}>{cart.length}
          </span></button>
      </nav>

    </>
  )
}
