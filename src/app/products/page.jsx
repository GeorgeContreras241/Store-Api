"use client"
import { Product } from "@/components/Product"
import styles from "@/styles/products.module.css"
import { Filter } from "@/components/filter"

export default function Products() {
    
    return (
        <main className={styles.products}>
            <article className={styles.filters}>
                <Filter></Filter>
            </article>
            <section className={styles.product}>
                <Product></Product>
            </section>
        </main>


    )
}

