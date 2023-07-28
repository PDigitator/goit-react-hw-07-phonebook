import { useDispatch, useSelector } from 'react-redux';

import { Report } from 'notiflix';

import { selectContacts } from 'redux/selectors';

import Button from 'components/Button/Button';

import { Form, Label, Input } from 'components/ContactForm/ContactForm.styled';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;
    const newContact = { name: name.value, phone: number.value };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      Report.info('SORRY', `${name.value} is already in contacts.`, 'Ok');
    } else {
      dispatch(addContact(newContact));
    }

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button text="Add contact" />
    </Form>
  );
};

export default ContactForm;
