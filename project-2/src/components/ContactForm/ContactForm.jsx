import React from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <Button text='VIA SUPPORT CHAT' icon={MdMessage}/>
        </div>
        <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm