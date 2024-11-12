"use client"
import { aumentCant, delateCart, disCant } from "@/redux/userSlice"
import styles from "@/styles/cart.module.css"
import { useDispatch, useSelector } from "react-redux"

export const Cart = () => {
    const { cart } = useSelector((state) => state.user)
    const { menu } = useSelector((state) => state.menu)
    const dispatch = useDispatch()
    const handleDelates = (id) => {
        dispatch(disCant(id))
         
    } 
    const total = cart.reduce((acc, item) => acc + item.priceTotal, 0)
    const handleDelate = (id) => { dispatch(delateCart(id))}
    const handleCart = (id) => { dispatch(aumentCant(id))}

    return (
        <article className={`${styles.cart} ${menu ? styles.active : ""}`}>
            <div className={styles.priceTotal}>
                <button>Completar Compra</button>
                <span>Precio Total : {total} USD</span>
            </div>
            {
                cart?.map(item =>
                    <div key={item.id} className={styles.card__cart}>
                        <div className={styles.cart__img}>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <p>{item.title}</p>
                        <span>Precio Total: {item.priceTotal}</span>
                        <div className={styles.cart__cant}>
                            <div className={styles.cart__buttons}>
                                <button className={styles.botton__dis} disabled={item.cantidad == 1 ? "disabled" : null} onClick={() => handleDelates(item.id)}>-</button>
                                <p>{item.cantidad}</p>
                                <button className={styles.botton__add} onClick={() => handleCart(item.id)}>+</button>
                            </div>
                            <button className={styles.botton__delate} onClick={() => handleDelate(item.id)}>Eliminar </button>
                        </div>
                    </div>
                )
            }
        </article>
    )
}
/*




*/