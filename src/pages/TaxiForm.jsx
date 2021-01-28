import React from 'react';
import { ProfileWrapper } from './Profile';
import { Redirect } from 'react-router-dom';
import { withStyles, Input, Paper } from '@material-ui/core';
import { formStyles } from "../styles/mapFormStyle";
import { connect } from 'react-redux';
import { loadAddress } from '../helpers/actions';
import Select from 'react-select';

class TaxiForm extends React.Component {
    state = {
        jumpToProfile: false,
        addresses: []
    }


    componentDidMount() {
        debugger
        this.props.loadAddress();
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.addresses !== prevProps.addresses) {
            
    //         this.setState({addresses: options})
    //     }
    // }

    onClickButton = () => {
        this.setState({jumpToProfile: true})
    }

    render() {
        const { formWrapper, redirectToProfile } = this.props.classes;
        const options = (this.props.addresses).map((x) => {
            return {value: `${x}`, label: `${x}`}
        })

        return (
            <>
                {this.props.profileData.cardName

                    ? <Paper className={formWrapper} elevation={3}>
                        <Select
                            name="addresses"
                            className="basic-single"
                            classNamePrefix="select"
                            options={options}
                        />
                        <Select
                            name="addresses"
                            className="basic-single"
                            classNamePrefix="select"
                            options={options}
                        />
                    </Paper>
                    : <Paper className={redirectToProfile} elevation={3}>
                        <div>Заполните платежные данные</div>
                        <button
                            className="button"
                            onClick={this.onClickButton}
                        >
                            Перейти в профиль
                        </button>
                        {this.state.jumpToProfile ? <Redirect to='/profile' component={ProfileWrapper} /> : null}
                    </Paper>
                }
            </>
        )

    }
}

export const TaxiFormWrapper = connect(
    (state) => ({
        addresses: state.loadAddressReducer.addresses,
        profileData: state.profileReducer.profileData
    }),
    { loadAddress }
)(withStyles(formStyles)(TaxiForm))