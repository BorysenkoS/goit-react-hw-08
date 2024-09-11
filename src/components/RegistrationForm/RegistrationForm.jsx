import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";

import { useDispatch, useSelector } from "react-redux";

import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const initValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Min 2 symbols")
    .max(30, "Max 50 symbols"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Min 8 symbols")
    .max(30, "Max 50 symbols"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
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
          <span className={css.formText}>Email</span>
          <Field className={css.formData} type="text" name="email" />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formText}>Password</span>
          <Field className={css.formData} type="password" name="password" />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Sign up
        </button>
        {error && <p className={css.errorMessage}>Some error: {error}</p>}
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
