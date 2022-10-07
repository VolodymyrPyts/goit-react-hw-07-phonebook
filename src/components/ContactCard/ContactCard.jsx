import { ContactItem } from './ContactItem/ContactItem';
import { ItemStyle } from './ContactCard.styled';
import { useSelector } from 'react-redux';
import { getContacts,  getFilters} from 'redux/selectors';

const getVizibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactCard = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const vizibleContacts = getVizibleContacts(contacts, filter);
  return (
    <ul>
      {vizibleContacts.map(contact => (
        <ItemStyle key={contact.id}>
          <ContactItem contact={contact} />
        </ItemStyle>
      ))}
    </ul>
  );
};
