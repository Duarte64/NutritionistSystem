import React from 'react'
import { HalfContainer } from './formStyle';
import {Button} from '@material-ui/core';
import { TitleH2 } from '../titles/TitleH2';

export function FormAppointment() {

    return (
        <HalfContainer>
            <TitleH2>Marcar Nova Consulta</TitleH2>
            <form onSubmit="">
                <Button type="submit" variant="contained" size="large" color="success" fullWidth>Register</Button>
            </form>
        </HalfContainer>
    );
}