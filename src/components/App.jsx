import { Box } from 'components/theme/Box';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactCard } from './ContactCard/ContactCard';
import { FilterContact } from './FilterContact/FilterContact';
import { Loader } from "./Loader/Loader";

import { TitleStyle } from './FormAddContact/FormAddContact.styled';
import { useFetchContactsQuery } from 'redux/contactSlice';

export const App = () => {

  const { data: contacts, isFetching } = useFetchContactsQuery();

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
            {isFetching && <Loader />}
            {contacts?.length > 0 ? (<FilterContact />) :
            (<Box> Let`s get started. Please add a new contact</Box>)
            }
            {contacts?.length > 0 && <ContactCard />}
          </Box>
        </Box>
      </>
    );
  }

