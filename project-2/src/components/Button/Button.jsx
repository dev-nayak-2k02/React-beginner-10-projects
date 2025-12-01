import styles from './Button.module.css'
import React from 'react'

const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button