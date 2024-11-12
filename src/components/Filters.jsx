"use client"
import React, {useEffect, useState} from 'react'
import styles from "@/styles/products.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addRange, filterCategory } from '@/redux/userSlice'

export const Filter = () => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false
    });

    const handleCheckBox = (event) => {
        const { name, checked } = event.target;
        const updatedCheck = {
            ...check,
            [name]: checked,
        };
        setCheck(updatedCheck);
        dispatch(filterCategory(updatedCheck));
  
    };
    
    
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
        </div>
    )
}
