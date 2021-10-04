import React, {useContext, useState} from 'react';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import "./form.css";
import { PatientsContext } from '../../providers/PatientsProvider';

const Form = () => {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const {pacientes, setPacientes} = useContext(PatientsContext);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h2" align="center">Register New Patient</Typography>
            <form onSubmit={(event) => {
                event.preventDefault();
                setPacientes([...pacientes, {nome: nome, sobrenome: sobrenome, peso: peso, altura: altura}]);
            }}>
                <TextField
                    value={nome}
                    onInput={((event) => {
                        setNome(event.target.value);
                    })} 
                    label="Name" 
                    variant="outlined" 
                    margin="normal" 
                    color="success"
                    fullWidth
                    required 
                />
                <TextField
                    value={sobrenome}
                    onInput={((event) => {
                        setSobrenome(event.target.value);
                    })} 
                    label="Last Name" 
                    variant="outlined" 
                    margin="normal"
                    color="success"
                    fullWidth 
                    required 
                />
                <div className="form__spacing">
                <TextField
                    value={altura} 
                    onInput={((event) => {
                        setAltura(event.target.value);
                    })} 
                    type="number" 
                    label="Height" 
                    variant="outlined" 
                    margin="normal"
                    color="success"
                    size="medium" 
                    required 
                />
                <TextField 
                    value={peso}
                    onInput={((event) => {
                        setPeso(event.target.value);
                    })} 
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
        </Container>
    )
}

export default Form;