import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import { addContact, selectContacts } from './redux/contactsSlice';


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
        <h1>Phone<span>book</span></h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox />
        <ContactList />
        </div>
    </>
  );
}

export default App
