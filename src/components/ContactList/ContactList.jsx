import PropTypes from 'prop-types';
import {
  ContactBtn,
  ContactItem,
  ContactText,
  ListUl,
} from './ContactList.styled';

export const ContactList = ({ contacts, removeContacts }) => {
  return (
    <ListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
            <ContactBtn onClick={() => removeContacts(id)}>Delete</ContactBtn>
          </ContactItem>
        );
      })}
    </ListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  removeContacts: PropTypes.func.isRequired,
};
