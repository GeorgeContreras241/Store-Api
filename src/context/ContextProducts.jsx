
"use client"
import React, { createContext, useState } from 'react'

export const ContextTienda = createContext(null)

export const ContextProducts = ({ children, initialData }) => {
  const [data, setData] = useState(initialData)
  const [fota, setfota] = useState(true)
  const [hola, sethola] = useState(false)
  const [filter, setfilter] = useState("all")
  const [check, setCheck] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false
  })
  const filtered = data.filter(item => 
    (!check.option1 && !check.option2 && !check.option3 && !check.option4) ||  
    (check.option1 && (item.category == "electronics")) || 
    (check.option2 && item.category == "jewelery") ||
    (check.option3 && item.category == "men's clothing") ||
    (check.option4 && item.category == "women's clothing")
  )
  
  return (
    <ContextTienda.Provider
      value={{filtered,check,setCheck}}>
      {children}
    </ContextTienda.Provider>
  )
}
