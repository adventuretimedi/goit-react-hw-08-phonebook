import ContactForm from './Phonebook/ContactForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import s from './App.module.css';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
// Додамо відображення індикатора запиту над списком завдань.
const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contentWrapper}>
      <section>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm />
      </section>
      {isLoading && !error && <b>Request in progress...</b>}
      <section>
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </section>
    </div>
  );
};

export default App;
