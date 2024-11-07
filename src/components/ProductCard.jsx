"use client"
import { useRouter } from "next/navigation"
import styles from "@/styles/productCard.module.css"
import { GrLinkPrevious } from "react-icons/gr";
import { Suspense, useContext } from "react";
import { ContextTienda } from "@/context/ContextProducts";
import Loading from "@/app/products/loading";

export const ProductCard = ({ data }) => {
    const router = useRouter()
    const { handleCart, handleDelate } = useContext(ContextTienda)
    return (
        <>
            <button className={styles.exit} onClick={() => router.back()}><GrLinkPrevious /></button>
            <section key={data.id} className={styles.cart}>
                    <div className={styles.container__img}>
                        <img className={styles.img} src={data.image} alt={data.title} /></div>
                    <div className={styles.container__text}>
                        <h5 className={styles.title} >{data.title}</h5>
                        <p className={styles.price} >USD ${data.price}</p>
                        <p className={styles.category} >{data.category}</p>
                        <p className={styles.description} >{data.description}</p>
                        <div className={styles.rate__count}>
                            <p className={styles.rating} >Rate: {data.rating.rate}</p>
                            <p className={styles.count} > Numero de opiniones: {data.rating.count}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => handleCart(data.id, data.title, data.price, data.image)} className={styles.button} >Agregar a carrito</button>
                            <button onClick={() => handleDelate(data.id)} className={styles.button} style={{ background: "red" }} >Eliminar de carrito</button>
                        </div>
                    </div>
            </section>
        </>

    )
}
