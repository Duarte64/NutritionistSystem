import React from 'react';
import {TableRow, TableCell, Typography, TableBody, Table} from '@material-ui/core';
import './list.css';
  

export const PatientHistoric = () => {
    return (
        <div className="historic">
            <div className='historic__infos'>
                <Typography variant="h6" gutterBottom component="div">
                    Patient
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name: Gabriel Duarte</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Gender: Male</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Age: 20</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Height: 1.7m</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Weight: 58m</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className='historic__table'>
                <Typography variant="h6" gutterBottom component="div">
                    Last Measurements
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>06/22/2021 - 18.8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>07/22/2021 - 19.1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>08/17/2021 - 19.3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>09/22/2021 - 19.8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>10/02/2021 - 20.1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}