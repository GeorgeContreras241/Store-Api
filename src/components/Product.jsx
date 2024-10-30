"use client"
import { ContextTienda } from "@/context/ContextProducts"
import { useContext } from "react"
import styles from "@/styles/products.module.css"
export const Product = () => {
    const {filtered} = useContext(ContextTienda)
    return (
        <>
            {
                filtered.map(item =>
                    <div key={item.id} className={styles.card__product}>
                        <div className={styles.product__img}>
                            <img src={item.image} alt="" />
                        </div>
                        <div className={styles.product__info}>
                            <p className={styles.title}>{item.title}</p>
                            <span className={styles.price}>US${item.price}</span>
                            <p className={styles.categoty}>{item.category}</p>
                            <p className={styles.rate}>Calificaciones Globales: {item.rating.rate}</p>
                            <p className={styles.count}>Vistas: {item.rating.count}</p>
                            <button className={styles.button}>Agregar al carrito</button>
                        </div>
                    </div>
                )
            }
        </>

    )
}

