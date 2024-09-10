import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectError, selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const error = useSelector(selectError);
  // const users = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const filteredUserName = useSelector(selectFilteredContacts);

  // const filteredUserName = users.filter((user) =>
  //   user.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return filteredUserName.map((user) => {
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
  });
};

export default ContactList;
