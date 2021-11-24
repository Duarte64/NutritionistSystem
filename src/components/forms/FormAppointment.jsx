import React from 'react'
import { HalfContainer } from './formStyle';
import {Button} from '@material-ui/core';
import { TitleH2 } from '../titles/TitleH2';
import { TextField } from '@material-ui/core';
export function FormAppointment() {

    return (
        <HalfContainer>
            <TitleH2>Schedule New Medical Appointment</TitleH2>
            <form>
                <TextField
                    label="Name" 
                    color="success"
                    fullWidth
                    required 
                />
                <TextField
                    label="Last Name" 
                    variant="outlined" 
                    margin="normal"
                    color="success"
                    fullWidth 
                    required
                />
                <div className="form__spacing">
                    <TextField
                        type="number" 
                        label="Height" 
                        variant="outlined" 
                        margin="normal"
                        color="success"
                        size="medium" 
                        required 
                    />
                    <TextField
                        type="number" 
                        label="Weight" 
                        variant="outlined" 
                        margin="normal"
                        color="success" 
                        size = "medium"
                        required 
                    />
                </div>
                <Button type="submit" variant="contained" size="large" color="success" fullWidth>Register</Button>
            </form>
        </HalfContainer>
    );
}