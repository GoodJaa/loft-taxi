import React from 'react'
import { withStyles, Input, Paper, TextField, MenuItem } from '@material-ui/core';
import { styles } from "../styles/mapFormStyle"

function TaxiForm(props) {
    const { formWrapper, formInput } = props.classes

    const onInputClick = event => {
        
    }

    return <>
        <Paper className={formWrapper} elevation={3}>
            <Input
            className={formInput}
            onClick={onInputClick}
            />
            <Input
            className={formInput}
            />
        </Paper>
    </>;
}

export default withStyles(styles)(TaxiForm)