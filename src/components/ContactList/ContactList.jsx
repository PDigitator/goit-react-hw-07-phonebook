import { useSelector } from 'react-redux';

import { selectContacts, selectFIlter } from 'redux/selectors';

import ListElement from 'components/ListElement/ListElement';
import { List, ListItem } from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFIlter);

  const normalisedFilter = filter.toLowerCase();

  const searchedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <List>
      {searchedContacts
        .sort((elementA, elementB) =>
          elementA.name.localeCompare(elementB.name)
        )
        .map(element => (
          <ListItem key={element.id}>
            <ListElement element={element} />
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;
