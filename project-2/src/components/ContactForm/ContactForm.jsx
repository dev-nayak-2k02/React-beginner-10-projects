import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
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
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
