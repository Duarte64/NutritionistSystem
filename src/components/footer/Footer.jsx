import React from 'react';
import {Typography} from '@material-ui/core';
import './footer.css';

export const Footer = () => {

    return (
        <div className="footer">
            <Typography variant="h6" gutterBottom component="div" className="footer__title">
                Gabriel Duarte - Made with ❤️
            </Typography>
        </div>
    )

}