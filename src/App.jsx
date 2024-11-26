import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
// import { Layout } from './Layout/Layout';
// import { AppBar } from './AppBar/AppBar';

export const App = () => {

  return (
    <>
      <div>
        <h1>Phone<span>book</span></h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App
