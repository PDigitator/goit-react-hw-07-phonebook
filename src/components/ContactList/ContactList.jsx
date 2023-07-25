import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

import ListElement from 'components/ListElement/ListElement';
import { List, ListItem } from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

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
