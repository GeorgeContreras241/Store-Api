"use client"
import { ContextTienda } from '@/context/ContextProducts'
import React, { useContext, useState } from 'react'
import styles from "@/styles/products.module.css"

export const Filter = () => {
    const { check, setCheck,value, setValue} = useContext(ContextTienda)

    const handleCheckBox = (event) => {
        setCheck((prevCheck) => ({
            ...prevCheck,
            [event.target.name]: event.target.checked
        }))
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={styles.container__filters}>
            <p>Category</p>
            <label>
                <input
                    type="checkbox"
                    name="option1"
                    checked={check.option1}
                    onChange={handleCheckBox}
                />
                <p>Electronics</p>
            </label>
            <label>
                <input
                    type="checkbox"
                    name="option2"
                    checked={check.option2}
                    onChange={handleCheckBox}
                />
                <p>Jewelery</p>
            </label>
            <label>
                <input
                    type="checkbox"
                    name="option3"
                    checked={check.option3}
                    onChange={handleCheckBox}
                />
                <p>Men is clothing</p>
            </label>
            <label>
                <input
                    type="checkbox"
                    name="option4"
                    checked={check.option4}
                    onChange={handleCheckBox}
                />
                <p>Women is clothing</p>
            </label>
            <label>
                <div className={styles.inputRange}>
                    <span className={styles.precio}>Precio</span>
                    <span className={styles.precio_des}>Buscar productos menores de $ {value}</span>
                    <input type="range"
                        id="rangeInput"
                        min="0"
                        max="1000"
                        value={value}
                        onChange={handleChange} />
                </div>
            </label>
        </div>
    )
}
