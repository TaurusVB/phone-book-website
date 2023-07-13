import { nanoid } from 'nanoid';
import { Input, Label, Container } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const filterId = nanoid();

  const handleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilterValue(value));
  };

  return (
    <Container>
      <Label htmlFor={filterId}>
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          id={filterId}
        />
      </Label>
    </Container>
  );
};
