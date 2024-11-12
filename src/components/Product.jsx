"use client"
import { addCart, delateCart } from "@/redux/userSlice"
import styles from "@/styles/products.module.css"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

export const Product = () => {
    const { users,cart } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleCart = (id) => {
        dispatch(addCart(id))
    }
    const handleDelate = (id) => {dispatch(delateCart(id))}
    return (
        <>
            {
                users.map(item =>
                    <div key={item.id} className={styles.card__product}>
                        <div className={styles.product__img}>
                            <Link href={"/products/[productId]"} as={`/products/${item.id}`} >
                                <img src={item.image} alt="" />
                            </Link>
                        </div>
                        <div className={styles.product__info}>
                            <p className={styles.title}><Link href={"/products/[productId]"} as={`/products/${item.id}`} >{item.title}</Link></p>
                            <span className={styles.price}>US${item.price}</span>
                            <p className={styles.categoty}>{item.category}</p>
                            <p className={styles.rate}>Calificaciones Globales: {item.rating.rate}</p>
                            <p className={styles.count}>Vistas: {item.rating.count}</p>
                            <div className={styles.container__button}>
                                <button onClick={()=>handleCart(item.id)} className={styles.button}>Agregar al carrito</button>
                                <button onClick={()=>handleDelate(item.id)} className={styles.button__delate}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

/*

*/