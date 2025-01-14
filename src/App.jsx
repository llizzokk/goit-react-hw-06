import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contact, setContact] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("phonebook"));

    return savedData && Array.isArray(savedData) && savedData.length > 0
      ? savedData
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredContacts = contact.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContact((prev) => [...prev, newContact]);
    actions.resetForm();
  };

  const handleClick = (id) => {
    setContact((prev) => prev.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("phonebook", JSON.stringify(contact));
  }, [contact]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox onChange={handleFilterChange} value={filter} />
      <ContactList contacts={filteredContacts} onDelete={handleClick} />
    </div>
  );
}

export default App;
