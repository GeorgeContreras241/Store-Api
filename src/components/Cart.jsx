"use client"
import styles from "@/styles/cart.module.css"
import { ContextTienda } from "@/context/ContextProducts"
import { useContext } from "react"

export const Cart = () => {
    const { cart, setCart, menu, handleDelate, handleCart } = useContext(ContextTienda)

    const handleDelates = (id) => {
        const newData = cart.map((item) =>
            item.id == id ? {
                ...item,
                cantidad: item.cantidad > 0 ? item.cantidad - 1 : 0,
                priceTotal: parseFloat((item.priceTotal - item.price).toFixed(2))
            } : item)
        setCart(newData)
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.priceTotal, 0)
    return (
        <article className={`${styles.cart} ${menu ? styles.active : ""}`}>
            <div className={styles.priceTotal}>
                <button>Completar Compra</button>
                <span>Precio Total : ${Math.round(totalPrice)} USD</span>
            </div>
            {
                cart.map(item =>
                    <div key={item.id} className={styles.card__cart}>
                        <div className={styles.cart__img}>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <p>{item.title}</p>
                        <span>Precio Total: {item.priceTotal}</span>
                        <div className={styles.cart__cant}>
                            <div className={styles.cart__buttons}>
                                <button className={styles.botton__dis} disabled={item.cantidad == 1 ? "disabled" : null} onClick={() => handleDelates(item.id, item.cantidad)}>-</button>
                                <p>{item.cantidad}</p>
                                <button className={styles.botton__add} onClick={() => handleCart(item.id, item.title, item.price, item.image)}>+</button>
                            </div>
                            <button className={styles.botton__delate} onClick={() => handleDelate(item.id, item.cantidad)}>Eliminar </button>
                        </div>
                    </div>
                )
            }
        </article>
    )
}
