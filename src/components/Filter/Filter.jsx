import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import InputBox from 'components/InputBox/InputBox';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import stylesForIcon from 'utils/stylesForIcons';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const filterId = nanoid();

  const handleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilterValue(value));
  };

  return (
    <InputBox
      typeInput="text"
      forAndId={filterId}
      labelName="Find contacts by name"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      style={{ margin: '0px', padding: '0 0 0 5px' }}
      styleForBox={{ margin: '0 0 30px 0' }}
    >
      <ContentPasteSearchIcon sx={stylesForIcon} />
    </InputBox>
  );
};
