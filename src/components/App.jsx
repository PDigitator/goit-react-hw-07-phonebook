import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Container, MainTitle, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <SearchFilter />
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notification message="There are no contacts in the phone book" />
      )}
    </Container>
  );
};

export default App;
