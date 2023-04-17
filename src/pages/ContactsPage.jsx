import ContactForm from 'components/Phonebook/ContactForm';
import ContactsList from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Typography variant="h3">Contacts</Typography>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>cheems crying so sorry, error</p>}
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
