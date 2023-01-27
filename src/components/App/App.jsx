import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { DivContainer, Title, TitleSecond } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = newContact => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      return alert(` ${newContact.name} is already in contacts.`);
    }

    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));

    // OR

    // this.setState(({ contacts }) =>
    //   contacts.find(contact => contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim())
    //     ? alert(`${newContact.name} is already in contacts`)
    //     : { contacts: [newContact, ...contacts] }
    // );
  };

  removeContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <DivContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmitForm={this.addContacts} />

        <TitleSecond>Contacts</TitleSecond>
        <Filter value={filter} onChangeFilter={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          removeContacts={this.removeContacts}
        />
      </DivContainer>
    );
  }
}
