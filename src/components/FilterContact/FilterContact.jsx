import { Box } from 'components/theme/Box';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filtrSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return <>
    <Box display="flex">
      <Box as="h3" mr="15px">
        Find contacts by name
      </Box>
      <input type="text" onChange={onChangeFilter} />
    </Box>
  </>;
};
