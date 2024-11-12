"use client"
import Link from "next/link";
import { Suspense, useEffect } from "react";
import Loading from "./products/loading";
import { addUser } from "@/redux/userSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()

  const apiCall = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    dispatch(addUser(data))
  }
  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="container__button">
      <Link className="button" href='/products'>Comenzar
      </Link>
    </div>
  )
}

