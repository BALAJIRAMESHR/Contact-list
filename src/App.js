import React,{useState,useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Addcontact from "./components/Addcontact";
import ContectList from "./components/ContectList";
// import Contactcard from "./components/Contactcard";


function App() {
  const LOCAL_STORAGE_KEY = "constacts";
  const [contacts, setContacts] = useState([]);

  const addContacthandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { ...contact }]);
  };
     
  const removeContacthandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if(retriveContact) setContacts(retriveContact);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

 
  return (
    <div className="ui container">
      <Header />
      <Addcontact addContacthandler={addContacthandler } />
      <ContectList contact={contacts} getContactId={removeContacthandler} /> 
    </div>

  );
}

export default App;
