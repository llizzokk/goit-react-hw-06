import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          name={name}
          number={number}
          key={id}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
