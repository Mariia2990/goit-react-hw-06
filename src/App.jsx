import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';


export const App = () => {

  return (
    <> 
      <div>
        <h1>Phone<span>book</span></h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        </div>
    </>
  );
}

export default App
