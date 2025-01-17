import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { RiDashboard2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
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
      <button
        className={styles.contactsItemBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
