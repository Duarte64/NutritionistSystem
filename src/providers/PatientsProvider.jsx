import React, { createContext, useState } from 'react'

const initialState = {pacientes:[], setPacientes:null};

export const PatientsContext = createContext(initialState);

export default function PatientsProvider({children}) {    

    const [pacientes, setPacientes] = useState([]);

    return (
        <PatientsContext.Provider value={{pacientes, setPacientes}}>
          {children}
        </PatientsContext.Provider>
    )
}

