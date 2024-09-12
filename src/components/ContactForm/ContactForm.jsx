import css from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const initValues = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name profile is required")

    .min(2, "Min 2 symbols")
    .max(30, "Max 50 symbols"),
  number: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number must be xxx-xx-xx"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const profileObj = {
      name: values.name,
      number: values.number,
    };

    const action = addContact(profileObj);
    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          <span className={css.formText}>Name</span>
          <Field className={css.formData} type="text" name="name" />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formText}>Phone</span>
          <Field className={css.formData} type="tel" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>

        <Toaster />
      </Form>
    </Formik>
  );
};

export default ContactForm;
