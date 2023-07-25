import PropTypes from 'prop-types';

import {
  Paragraph,
  Span,
  Btn,
} from 'components/ListElement/ListElement.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ListElement = ({ element: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>
        {name}:<Span>{number}</Span>
      </Paragraph>
      <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
    </>
  );
};

ListElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListElement;
