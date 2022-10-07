import { useSelector } from 'react-redux';

import { ContactItem } from './ContactItem/ContactItem';
import { useFetchContactsQuery } from 'redux/contactSlice';
import { selectFilter} from 'redux/selectors';


import { ItemStyle } from './ContactCard.styled';

const getVizibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactCard = () => {
  const {data: contacts} = useFetchContactsQuery();
  const filter = useSelector(selectFilter);
  const vizibleContacts = getVizibleContacts(contacts, filter);

  return (
    <ul>
      {vizibleContacts.reverse().map(contact => (
        <ItemStyle key={contact.id}>
          <ContactItem contact={contact} />
        </ItemStyle>
      ))}
    </ul>
  );
};
