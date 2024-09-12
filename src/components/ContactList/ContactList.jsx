import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectContacts, selectError } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filteredUserName = useSelector(selectFilteredContacts);

  return contacts.length === 0 ? (
    <b>Contacts list is empty..</b>
  ) : (
    filteredUserName.map((user) => {
      return (
        <div className={css.contactList} key={user.id}>
          {error === null && (
            <Contact
              userId={user.id}
              key={user.id}
              name={user.name}
              number={user.number}
            />
          )}
        </div>
      );
    })
  );
};

export default ContactList;
