import { useState } from 'react';

import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactSlice';
import { Loader } from 'components/Loader/Loader';

import { Box } from 'components/theme/Box';
import { LabelStyle, ButtonStyle } from './FormAddContact.styled';

export const FormAddContact = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    number: '',
  });
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { name, number } = formInput;

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const onHandleSubmit = async e => {
    e.preventDefault();

    setFormInput({
      name: '',
      number: '',
    });

    const newContact = {
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : await createContact(newContact);
  }; 

  return (
    <Box width="400px">
      <form onSubmit={onHandleSubmit}>
        <LabelStyle>
          <Box as="p" display="inline">
            Name
          </Box>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </LabelStyle>
        <LabelStyle>
          <Box as="p" display="inline" mr="auto">
            Namber
          </Box>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </LabelStyle>
        <ButtonStyle type="submit">
          {isLoading && <Loader size={14} />}
          Add new Contact
        </ButtonStyle>
      </form>
    </Box>
  );
};
