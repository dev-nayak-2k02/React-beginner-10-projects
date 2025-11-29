import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name="text" rows='8'/>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
