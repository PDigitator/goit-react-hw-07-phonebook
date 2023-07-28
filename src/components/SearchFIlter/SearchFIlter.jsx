import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';

import { selectFilter } from 'redux/filterSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const search = evt => {
    dispatch(selectFilter(evt.target.value.trim()));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="name" onChange={search} />
    </Label>
  );
};

export default SearchFilter;
