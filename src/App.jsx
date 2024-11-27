import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
import { addContact, selectContacts } from './redux/contactsSlice';
// import { Layout } from './Layout/Layout';
// import { AppBar } from './AppBar/AppBar';

export const App = () => {
const dispatch = useDispatch();
const contacts = useSelector(selectContacts); 

const handleAddContact = newContact => {
  const contactExists = contacts.some(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
  );

  if (contactExists) {
    alert(`${newContact.name} is already in contacts.`);
    return;
  }

  dispatch(addContact(newContact));
};

  return (
    <>
      <div>
        <h1>
          Phone<span>book</span>
        </h1>
        <ContactForm onAddContact={handleAddContact} />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App
