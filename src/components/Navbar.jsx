import React from 'react'
import styles from "@/styles/navbar.module.css"
import { FaShoppingCart } from "react-icons/fa";
export const Navbar = () => {
  return (
    <>
        <nav className={styles.header}>
            <ul>
                <li>Tienda Api Real Fake</li>
            </ul>
            <input type="text" />
            <p><FaShoppingCart /></p>
        </nav>
    </>
  )
}
