import s from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

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
    <div>
      <ul>
        {visibleContacts.map(contact => (
          <li className={s.contactsListItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={s.contactsBtn}
              onClick={() => {
                handleDelete(contact);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
