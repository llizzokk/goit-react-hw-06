import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  const saveData = contacts.filter((item) =>
    item.name.trim().toLowerCase().includes(filters.trim().toLowerCase())
  );

  return (
    <ul className={styles.contactsList}>
      {saveData.map(({ id, name, number }) => (
        <Contact name={name} number={number} key={id} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
