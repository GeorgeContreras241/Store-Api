"use client"
import { Product } from "@/components/Product"
import styles from "@/styles/products.module.css"
import { Filter } from "@/components/Filters"
import { Cart } from "@/components/Cart"

export default function Products() {
    
    return (
        <main className={styles.products}>
            <article className={styles.filters}>
                <Filter></Filter>
            </article>
            <section className={styles.product}>
                <Product></Product>
            </section>
            <Cart></Cart>
        </main>


    )
}

