import React, {useState, useContext} from 'react'
import {TableRow, TableCell, IconButton, Collapse, Box} from '@material-ui/core'
import {patientContext} from './List'
import {PatientHistoric} from './PatientHistoric'
export const PacientRow = () => {
    const paciente = useContext(patientContext);

    const [open, setOpen] = useState(false);
    return(
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "↑" : "↓"}
                    </IconButton>
                </TableCell>
                <TableCell>{`${paciente.nome} ${paciente.sobrenome}`}</TableCell>
                <TableCell>{paciente.altura}</TableCell>
                <TableCell>{paciente.peso}</TableCell>
                <TableCell>{(paciente.peso / (paciente.altura*paciente.altura)).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <PatientHistoric/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}