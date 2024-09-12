import "./App.css";

// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { Layout } from "./components/Layout/Layout";
// import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { apiRefreshUser } from "./redux/auth/operations";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>User is refreshing, please wait...</b>;
  }
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Routes>
      </Layout>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
};

export default App;
