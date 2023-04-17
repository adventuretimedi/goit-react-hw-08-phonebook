import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { addContact } from 'redux/operations';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const alreadyExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    form.reset();

    if (alreadyExists) {
      Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={s.contactForm}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoFocus
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title:
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="number"
        label="Phone Number"
        name="number"
        type="tel"
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
          title: 'Phone number must be digits',
        }}
      />
      <Button
        color="primary"
        size="medium"
        variant="contained"
        type="submit"
        className={s.button}
      >
        {/* <button type="submit" className={s.button}> */}
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
