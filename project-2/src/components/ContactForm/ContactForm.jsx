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
          <input type="text" name="name"/>
            </div>
        </form>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
