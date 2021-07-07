import React from 'react';
import { ProfileWrapper } from './Profile';
import { Redirect } from 'react-router-dom';
import { withStyles, Paper, Grid } from '@material-ui/core';
import { formStyles, selectStyles } from "../styles/formStyle";
import "../styles/button.css";
import { connect } from 'react-redux';
import { loadAddress, getRoute, newTaxiOrder, requiredFormFalse, requiredFormTrue } from '../helpers/actions';
import Select from 'react-select';
import { drawRoute, removeRoute } from '../helpers/drawRoute';

class TaxiForm extends React.Component {

    state = {
        jumpToProfile: false,
        selectedFrom: '',
        selectedWhere: '',
    }


    componentDidMount() {
        this.props.loadAddress();
    }

    jumpToProfile = () => {
        this.setState({ jumpToProfile: true })
    }

    handleClick = async () => {
        if (!this.props.calledTaxi) {
            if (this.state.selectedFrom && this.state.selectedWhere) {
                this.props.requiredFormTrue()
                this.props.getRoute(this.state.selectedFrom, this.state.selectedWhere);
                this.setState({ selectedFrom: '', selectedWhere: '' })
            } else {
                this.props.requiredFormFalse()
            }
        } else {
            this.props.requiredFormTrue()
            removeRoute(this.props.loadedMap.map)
            this.props.newTaxiOrder()
        }
    }

    fromAddressChange = (address) => {
        address ?
            this.setState({ selectedFrom: address.value }) :
            this.setState({ selectedFrom: '' })
    }

    whereAddressChange = (address) => {
        address ?
            this.setState({ selectedWhere: address.value }) :
            this.setState({ selectedWhere: '' })
    }


    render() {
        const {
            redirectToProfile,
            wrapper,
            buttonWrapper,
            selectWrapper,
            formWrapper,
            formWrapperTaxiModify,
            taxiOrderTitle,
            taxiOrderDesc,
            notRequiredForm,
            redirectToprofileDesc
        } = this.props.classes;

        const selectOptions = []

        this.props.addresses.forEach((x) => {
            if (this.state.selectedFrom !== x && this.state.selectedWhere !== x) {
                selectOptions.push({ value: `${x}`, label: `${x}` })
            }
        })

        if (this.props.calledTaxi) {
            drawRoute(this.props.loadedMap.map, this.props.coordinates.coordinates);
        }

        return (
            <>
                {this.props.profileData.cardName ?
                    !this.props.calledTaxi ?
                        <Grid
                            className={wrapper}
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Paper className={formWrapper} elevation={3}>
                                <div className={selectWrapper}>
                                    <Select
                                        name="addresses"
                                        onChange={this.fromAddressChange}
                                        inputId='fromSelect'
                                        styles={selectStyles}
                                        classNamePrefix="select"
                                        options={selectOptions}
                                        isClearable={true}
                                        placeholder="Откуда"
                                    />
                                    {
                                        !this.state.selectedFrom && !this.props.requiredForm ?
                                            <div className={notRequiredForm}>Выберите начальный адрес</div> :
                                            null
                                    }
                                    <Select
                                        name="addresses"
                                        onChange={this.whereAddressChange}
                                        inputId='whereSelect'
                                        styles={selectStyles}
                                        classNamePrefix="select"
                                        options={selectOptions}
                                        isClearable={true}
                                        placeholder="Куда"
                                    />
                                    {
                                        !this.state.selectedWhere && !this.props.requiredForm ?
                                            <div className={notRequiredForm}>Выберите конечный адрес</div> :
                                            null
                                    }
                                </div>
                                <div className={buttonWrapper}>
                                    <button className="button" onClick={this.handleClick}>
                                        Заказать
                                    </button>
                                </div>
                            </Paper>
                        </Grid>
                        : <Paper className={`${formWrapper} ${formWrapperTaxiModify}`} elevation={3}>
                            <h2 className={taxiOrderTitle}>Заказ размещен</h2>
                            <div className={taxiOrderDesc}>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
                            <div className={buttonWrapper}>
                                <button className="button" onClick={this.handleClick}>Сделать новый заказ</button>
                            </div>
                        </Paper>
                    : <Paper className={redirectToProfile} elevation={3}>
                        <div className={redirectToprofileDesc}>Заполните платежные данные</div>
                        <button
                            className="button"
                            onClick={this.jumpToProfile}
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
        profileData: state.profileReducer.profileData,
        coordinates: state.routeReducer.coordinates,
        loadedMap: state.loadedMapReducer.loadedMap,
        calledTaxi: state.routeReducer.calledTaxi,
        requiredForm: state.requiredFormReducer.requiredForm
    }),
    { loadAddress, getRoute, newTaxiOrder, requiredFormFalse, requiredFormTrue }
)(withStyles(formStyles)(TaxiForm))