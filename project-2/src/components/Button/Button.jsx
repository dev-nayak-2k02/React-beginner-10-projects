import { MdMessage } from "react-icons/md";
import styles from './Button.module.css'
import React from 'react'

const Button = () => {
  return (
    <button className={styles.primary}>
        <MdMessage />
    </button>
  )
}

export default Button