
"use client"
import React, { createContext, useState } from 'react'

export const ContextTienda = createContext(null)

export const ContextProducts = ({ children, initialData }) => {
  const [data, setData] = useState(initialData)
  const [value, setValue] = useState(1000)
  const [cart, setCart] = useState([])
  const [check, setCheck] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false
  })
  const [product, setProduct] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [menu, setMenu] = useState(false)
  const handleInput = (event) => {
    setSearchValue(event.target.value)

  }
  const filtered = data.filter(item =>
    (value > item.price) && (!check.option1 && !check.option2 && !check.option3 && !check.option4) ||
    ((check.option1 && (item.category == "electronics")) && (value > item.price)) ||
    ((check.option2 && item.category == "jewelery") && (value > item.price)) ||
    ((check.option3 && item.category == "men's clothing") && (value > item.price)) ||
    (check.option4 && item.category == "women's clothing") && (value > item.price)
  )
  const productOnly = data.filter(item => (
    item.id === product
  ))

  const filteredSearch = data.filter(item => (
    searchValue && item.title.toLowerCase().includes(searchValue.toLowerCase())
  ))

  const handleCart = (id, title, price, image) => {
    const itemInCart = cart.find(item => item.id === id)
    if (!itemInCart) {
      setCart((prev) => [
        ...prev,
        {
          id, title, price, image, cantidad: +1, priceTotal: price
        }])
    } else {
      const filteredCAntidad = cart.map((item) =>
        item.id === id ? { ...item, price: item.price, cantidad: ++item.cantidad, priceTotal: item.price * item.cantidad} : item
      )
      setCart(filteredCAntidad)
    }
  }

  const handleDelate = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  return (
    <ContextTienda.Provider
      value={{
        filtered, check, setCheck, value,
        setValue, cart, setCart, setProduct
        , productOnly,
        searchValue, filteredSearch, handleInput, setSearchValue, setMenu, menu,handleCart,handleDelate
      }}>
      {children}
    </ContextTienda.Provider>
  )
}
