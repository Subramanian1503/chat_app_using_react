import styles from "../styles/SelectContacts.module.css";
import data from "../resources/Conversation-data.json";
import ContactCard from "./ContactCard";

function SelectContacts({ handleClose }) {
  const contactList = data.contacts;
  return (
    <div className={styles.modalDesc}>
      {/* load list of contacts  */}
      <ul className={styles.contactList}>
        {contactList.map((contact) => (
          <li className={styles.contact}>
            <ContactCard contact={contact} handleClose={handleClose} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectContacts;
