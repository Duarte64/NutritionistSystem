import { Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import React, {useContext, createContext} from 'react';
import {PatientsContext} from '../../providers/PatientsProvider';
import { PacientRow } from './PatientRow';
import { TitleH2 } from '../titles/TitleH2';

import './list.css';

export const patientContext = createContext();

function List() {

    const {pacientes} = useContext(PatientsContext);

    return(
        <div className="texteS2">
            <TitleH2>Patient</TitleH2>
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
        </div>
    )

}

export default List;