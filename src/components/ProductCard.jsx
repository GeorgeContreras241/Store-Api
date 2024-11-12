"use client"
import { useRouter } from "next/navigation"
import styles from "@/styles/productCard.module.css"
import { GrLinkPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delateCart } from "@/redux/userSlice";
import { useState, useEffect } from "react";


export const ProductCard = ({ data }) => {
    const [id, setId] = useState(data.id);
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products/" + id)
        const data = await res.json()
        setProduct(data)
    }
    useEffect(() => {
        fetchProduct()
    }, [id])

    const router = useRouter()
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addCart(id))
    }
    const handleDelate = (id) => {
        dispatch(delateCart(id))
    }
    console.log(product.id)
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
                        <button onClick={() => handleCart(product.id)} className={styles.button} >Agregar a carrito</button>
                        <button onClick={() => handleDelate(product.id)} className={styles.button} style={{ background: "red" }} >Eliminar de carrito</button>
                    </div>
                </div>
            </section>
        </>

    )
}
