import { useDispatch } from "react-redux";

import { Button, ContactItem, Number, Text } from "./Contact.styled";
import { deleteContacts } from "../../redux/contactsOps";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <p>
        <Text>{name}</Text>: <Number>{number}</Number>
      </p>
      <Button onClick={() => dispatch(deleteContacts(id))}>Delete</Button>
    </ContactItem>
  );
}
