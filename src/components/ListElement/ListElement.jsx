import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';

import {
  Paragraph,
  Span,
  Btn,
} from 'components/ListElement/ListElement.styled';

const ListElement = ({ element: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>
        {name}:<Span>{phone}</Span>
      </Paragraph>
      <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
    </>
  );
};

ListElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListElement;
