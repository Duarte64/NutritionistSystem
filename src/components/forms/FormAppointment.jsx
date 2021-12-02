import React, {useContext, useState} from 'react'
import { HalfContainer } from './formStyle';
import {Button, TextField, Autocomplete, Checkbox} from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import {PatientsContext} from '../../providers/PatientsProvider';
import { TitleH2 } from '../titles/TitleH2';
import './materialUI.css';

export function FormAppointment() {

    const {pacientes} = useContext(PatientsContext);

    const [notRegistered, setRegistered] = useState(false);

    function handleToogleRegistered() {
        setRegistered(notRegistered ? false : true);
    }

    return (
        <HalfContainer>
            <TitleH2>Schedule New Medical Appointment</TitleH2>
            <form>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={pacientes.map((paciente)=> {
                        return `${paciente.nome} ${paciente.sobrenome}`;
                    })}
                    renderInput={(params) => <TextField {...params} label="Patient" />}
                    disabled={notRegistered}
                />
                <FormControlLabel 
                    control={
                        <Checkbox 
                            size="medium" 
                            onClick={handleToogleRegistered}
                        />
                    }
                    label="Patient Not Registered Yet"
                />
                {/*<LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>*/}
                <Button type="submit" variant="contained" size="large" color="success" fullWidth>Register</Button>
            </form>
        </HalfContainer>
    );
}