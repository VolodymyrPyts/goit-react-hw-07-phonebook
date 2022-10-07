import PropTypes from 'prop-types';

import { Box } from 'components/theme/Box';

import { Loader } from 'components/Loader/Loader';
import { useDeleteContactMutation } from 'redux/contactSlice';

import { ItemSpanStyle, DelButtonStyle } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Box display="flex">
        <ItemSpanStyle>{name}:</ItemSpanStyle>
        <ItemSpanStyle>{phone}</ItemSpanStyle>
      </Box>
      <DelButtonStyle
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <Loader size={14} />}
        Delete
      </DelButtonStyle>
    </>
  );
};

ContactItem.propTypes = {
  contact:  PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
})};
