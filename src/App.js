import './App.css';
import Header from './components/header/Header';
import FormPatient from './components/forms/FormPatient';
import { FormAppointment } from './components/forms/FormAppointment';
import List from './components/list/List';
import React from 'react';
import PatientsProvider from './providers/PatientsProvider';
import {Footer} from './components/footer/Footer'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <PatientsProvider>
        <div className='testando'>
          <FormPatient/>
          <FormAppointment/>
        </div>
        <List/>
      </PatientsProvider>
      <Footer/>
    </React.Fragment>
  );

}

export default App;
