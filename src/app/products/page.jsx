"use client"
import { Product } from "@/components/Product"
import styles from "@/styles/products.module.css"
import { Filter } from "@/components/Filters"
import { Cart } from "@/components/Cart"
import { useState } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


export default function Products() {
    const [darkMode, setDarkMode] = useState(false)

    const handleMode = () => {
        if (darkMode) {
            document.body.classList.remove('darkMode')
            setDarkMode(false)
        } else {
            document.body.classList.add('darkMode')
            setDarkMode(true)
        }
    }

    return (
        <main className={styles.products}>
            <article className={styles.filters}>
                <Filter></Filter>
            </article>
                <section className={styles.product}>
                    <Product></Product>
                </section>
            <Cart></Cart>
            <button className={styles.button__darkMode}
                onClick={handleMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        </main>


    )
}

