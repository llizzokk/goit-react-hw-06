import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactsItem}>
      <div className={styles.contactsItemWrap}>
        <div className={styles.contactsItemField}>
          <FaUserAlt />
          <p className={styles.contactsItemText}>{name}</p>
        </div>
        <div className={styles.contactsItemField}>
          <FaPhoneAlt />
          <p className={styles.contactsItemText}>{number}</p>
        </div>
      </div>
      <button className={styles.contactsItemBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
