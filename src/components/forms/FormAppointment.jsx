import React from 'react'
import { HalfContainer } from './formStyle';
import {Button, TextField, Autocomplete, Checkbox} from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TitleH2 } from '../titles/TitleH2';
import './materialUI.css';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

export function FormAppointment() {

    return (
        <HalfContainer>
            <TitleH2>Schedule New Medical Appointment</TitleH2>
            <form>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['a','b','c','d','e','c','d']}
                    renderInput={(params) => <TextField {...params} label="Patient" />}
                />
                <FormControlLabel 
                    control={
                        <Checkbox 
                            defaultChecked 
                            size="medium" 
                            color="success"
                        />
                    }
                    label="Patient Not Registered Yet"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
                <TextField
                    type="number" 
                    label="Weight" 
                    variant="outlined" 
                    margin="normal"
                    color="success" 
                    size = "medium"
                    required 
                />
            <Button type="submit" variant="contained" size="large" color="success" fullWidth>Register</Button>
            </form>
        </HalfContainer>
    );
}