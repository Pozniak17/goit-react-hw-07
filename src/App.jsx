import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import { GlobalStyle } from "./components/GlobalStyle.styled";
import { Layout } from "./components/Layout.styled";
import Filter from "./components/SearchBox/SearchBox";
import { selectError, selectIsLoading } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {error && <p>{error}</p>}
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
}
