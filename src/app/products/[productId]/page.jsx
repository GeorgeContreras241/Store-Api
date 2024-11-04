import { ProductCard } from "@/components/ProductCard"



export default async function ProductPage({ params }) {
    const { productId } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await res.json()

    return (
        <>
            <ProductCard data={data}></ProductCard>
        </>
    )
}

