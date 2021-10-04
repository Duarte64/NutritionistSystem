import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';
import React from 'react';
import PatientsProvider from './providers/PatientsProvider';
import {Footer} from './components/footer/Footer'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <PatientsProvider>
        <Form/>
        <List/>
      </PatientsProvider>
      <Footer/>
    </React.Fragment>
  );

}

export default App;
