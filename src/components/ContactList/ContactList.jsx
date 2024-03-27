import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const { items } = useSelector(getContacts);
  const filter = useSelector(selectNameFilter);
  console.log(filter);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      ) : (
        <b>No contacts found</b>
      )}
    </>
  );
}
