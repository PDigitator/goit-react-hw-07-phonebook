import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import Loader from 'components/Loader/Loader';

import { Container, MainTitle, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <SearchFilter />
      {isLoading && !error && <Loader />}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notification message="There are no contacts in the phone book" />
      )}
    </Container>
  );
};

export default App;
