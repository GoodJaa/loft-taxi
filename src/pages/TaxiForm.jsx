import React from 'react'
import { withStyles, Input, Paper} from '@material-ui/core';
import { styles } from "../styles/mapFormStyle"
import { connect } from 'react-redux';
import { loadAddress } from '../helpers/actions'
import AsyncSelect from 'react-select'

class TaxiForm extends React.Component {
    constructor(props) {
        super(props);
    }

    // filterAddress = (inputValue: string) => {
    //     const addresses = loadAddress().filter(i =>
    //       i.label.toLowerCase().includes(inputValue.toLowerCase())
    //     );
    //     return addresses;
    // };
    inputClick = (inputValue) => {
        const addresses = loadAddress();
        console.log(addresses);
        return addresses.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase))
    }

    render() {
        const { formWrapper } = this.props.classes

        return <>
            <Paper className={formWrapper} elevation={3}>
                <AsyncSelect
                    name="colors"
                    className="basic-single"
                    classNamePrefix="select"
                    cacheOptions
                    defaultOptions
                    loadOptions={this.inputClick}
                />
                <Input
                    className={this.formInput}
                />
            </Paper>
        </>;
    }
}

export const TaxiFormWrapper = connect(
    (state) => ({
        addresses: state.loadAddressReducer.addresses
    }),
    { loadAddress }
)(withStyles(styles)(TaxiForm))