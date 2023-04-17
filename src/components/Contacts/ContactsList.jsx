import s from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const filterLower = filter.toLowerCase();
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterLower)
        );
  };

  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <List className={s.list}>
      {visibleContacts.map(contact => (
        <ListItem
          key={contact.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                handleDelete(contact);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={contact.name} secondary={contact.number} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
