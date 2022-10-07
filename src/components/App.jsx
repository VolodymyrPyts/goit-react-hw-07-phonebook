import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Box } from 'components/theme/Box';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactCard } from './ContactCard/ContactCard';
import { FilterContact } from './FilterContact/FilterContact';

import { TitleStyle } from './FormAddContact/FormAddContact.styled';

export const App = () => {

  const contacts = useSelector(getContacts)

    return (
      <>
        <TitleStyle>Phonebook </TitleStyle>
        <Box display="flex" height="100vh" width="100vw">
          <Box mr="80px" pl="20px">
            <Box as="h2" mb="12px">
              Add new contacts
            </Box>
            <FormAddContact />
          </Box>
          <Box pl="20px" width="400px">
            <Box as="h2" mb="12px">
              Contacts
            </Box>
            {contacts.length > 0 ? (<FilterContact />) :
            (<Box> Let`s get started. Please add a new contact</Box>)
            }
            {contacts.length > 0 && <ContactCard />}
          </Box>
        </Box>
      </>
    );
  }

