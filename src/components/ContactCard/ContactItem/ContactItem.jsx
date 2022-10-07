
import { Box } from 'components/theme/Box';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

import { ItemSpanStyle, DelButtonStyle } from './ContactItem.styled';

export const ContactItem = ({contact: { id, name, number}}) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id))
  
  return (
    <>
      <Box display="flex">
        <ItemSpanStyle>{name}:</ItemSpanStyle>
        <ItemSpanStyle>{number}</ItemSpanStyle>
      </Box>
      <DelButtonStyle type="button" onClick={() => handleDelete(id)}>
        Delete
      </DelButtonStyle>
    </>
  );
};

