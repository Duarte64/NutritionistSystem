import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import React, {useContext, createContext} from 'react';
import {PatientsContext} from '../../providers/PatientsProvider';
import { PacientRow } from './PatientRow';
import './list.css';

export const patientContext = createContext();

function List() {

    const {pacientes} = useContext(PatientsContext);

    return(
        <Container maxWidth="md" className="list__container">
            <Typography variant="h4" component="h2" align="center">Pacients List</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Height</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>IMC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pacientes.map((paciente, index) => {
                        return(
                            <patientContext.Provider key={index} value={paciente}>
                                <PacientRow key={index}/>
                            </patientContext.Provider>
                        )
                    })}
                </TableBody>
                {/*
                <TableFooter>
                    <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 30]}
                        count={pacientes.length}
                        
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                            'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        
                        />
                    </TableRow>
                </TableFooter>
                */}
            </Table>
        </Container>
    )

}

export default List;