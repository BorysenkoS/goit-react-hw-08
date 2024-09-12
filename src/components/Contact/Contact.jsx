import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ name, number, userId }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        onClick={() =>
          dispatch(deleteContact(userId))
            .unwrap()
            .then(() => {
              toast.success("Contact delete successfully");
            })
        }
        className={css.contactBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
