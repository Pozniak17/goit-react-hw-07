import { useDispatch } from "react-redux";

import { Button, ContactItem, Number, Text } from "./Contact.styled";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <p>
        <Text>{name}</Text>: <Number>{number}</Number>
      </p>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ContactItem>
  );
}
