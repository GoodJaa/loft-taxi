import React, { Component } from 'react';
import '../styles/profile.css';
import '../styles/layout.css';
import '../styles/credit-card.css';
import '../styles/button.css';
import { Logo, MCIcon } from "loft-taxi-mui-theme";
import { connect } from 'react-redux';
import { profileSend, profileSaveComplete, requiredFormTrue, requiredFormFalse } from '../helpers/actions';
import { Redirect } from 'react-router-dom';
import { MapWrapper } from './Map';
import { formStyles } from '../styles/formStyle';
import { withStyles } from '@material-ui/core';
import { Formik } from 'formik';
import InputMask from 'react-input-mask';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {
                cardNumber: this.props.profileData.cardNumber || '',
                expiryDate: this.props.profileData.expiryDate || '',
                cardName: this.props.profileData.cardName || '',
                cvc: this.props.profileData.cvc || '',
                token: this.props.profileData.token || ''
            },
            jumpToMap: false,
        }
    }

    onInputChange = (e) => {
        const updateFormFields = this.state.formFields

        updateFormFields[e.target.name] = e.target.value

        this.setState({ formFields: updateFormFields });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        const { cardNumber, expiryDate, cardName, cvc } = event.target;
        if (cardName.value && expiryDate.value && cardName.value && cvc.value) {
            this.props.requiredFormTrue()
            this.props.profileSend(
                cardNumber.value,
                expiryDate.value,
                cardName.value,
                cvc.value,
                this.state.token
            );
        } else {
            this.props.requiredFormFalse()
        }

    }

    onClickButton = () => {
        this.setState({ jumpToMap: true })
        this.props.profileSaveComplete();
    }

    render() {
        const { cardNumber, expiryDate, cardName, cvc } = this.state.formFields;

        const {
            buttonWrapper,
            notRequiredForm,
            creditCardLogo,
            creditCardIcon
        } = this.props.classes;

        return (
            <div className="profile-wrapper">
                <div className="profile profile--tomap">
                    <div className="profile__title-container">
                        <h1 className="profile__title">Профиль</h1>
                        <div className="profile__title-desc">
                            {
                                !this.props.profileSave ?
                                    'Введите платёжные данные' :
                                    'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                            }
                        </div>
                    </div>
                    {!this.props.profileSave ?
                        <>
                            <div className="profile__main">
                                <Formik>{({ onFormSubmit, touched, errors }) => {
                                    return (
                                        <form className="profile__form" id="form" onSubmit={this.onFormSubmit}>
                                            <div className="profile__inputs-wrapper">
                                                <div className="profile__input-wrapper">
                                                    <label htmlFor="name" className="profile__label">
                                                        Имя владельца
                                                        </label>
                                                    <input
                                                        id="name"
                                                        value={cardName}
                                                        name="cardName"
                                                        onChange={this.onInputChange}
                                                        className="profile__input"
                                                    />
                                                    {
                                                        !this.state.formFields.cardName && !this.props.requiredForm ?
                                                            <div className={notRequiredForm}>Введите имя карты</div> :
                                                            null
                                                    }
                                                </div>
                                                <div className="profile__input-wrapper">
                                                    <label htmlFor="number" className="profile__label">
                                                        Номер карты
                                                    </label>
                                                    <InputMask
                                                        id="number"
                                                        mask="9999  9999  9999  9999"
                                                        value={cardNumber}
                                                        name="cardNumber"
                                                        onChange={this.onInputChange}
                                                        className="profile__input"
                                                    />
                                                    {
                                                        !this.state.formFields.cardNumber && !this.props.requiredForm ?
                                                            <div className={notRequiredForm}>Введите номер карты</div> :
                                                            null
                                                    }
                                                </div>
                                                <div className="profile__inputs">
                                                    <div className="profile__input-wrapper">
                                                        <label htmlFor="dateMonth" className="profile__label">
                                                            MM/YY
                                                            </label>
                                                        <div className="profile__input-date">
                                                            <InputMask
                                                                id="date"
                                                                mask="99/99"
                                                                value={expiryDate}
                                                                name="expiryDate"
                                                                onChange={this.onInputChange}
                                                                className="profile__input"
                                                            />
                                                            {
                                                                !this.props.requiredForm && !this.state.formFields.expiryDate ?
                                                                    <div className={notRequiredForm}>Введите дату</div> :
                                                                    null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="profile__input-wrapper">
                                                        <label htmlFor="cvc" className="profile__label">
                                                            CVC
                                                            </label>
                                                        <InputMask
                                                            id="cvc"
                                                            mask="999"
                                                            value={cvc}
                                                            name="cvc"
                                                            onChange={this.onInputChange}
                                                            className="profile__input"
                                                        />
                                                        {
                                                            !this.state.formFields.cvc && !this.props.requiredForm ?
                                                                <div className={notRequiredForm}>Введите cvc</div> :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                                </Formik>
                                <div className="credit-card-wrapper">
                                    <div className="credit-card">
                                        <div className="credit-card__header">
                                            <div className={creditCardLogo}>
                                                <Logo />
                                            </div>
                                            <div className="credit-card__date-wrapper">
                                                <span className="credit-card__date">{this.state.formFields.expiryDate}</span>
                                            </div>
                                        </div>
                                        <div className="credit-card__number">{this.state.formFields.cardNumber}</div>
                                        <div className={creditCardIcon}>
                                            <MCIcon className={creditCardIcon}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> :
                        null
                    }
                    <div className={buttonWrapper}>
                        {!this.props.profileSave ?
                            <input type="submit" form="form" className="button" value="Сохранить" /> :
                            <button onClick={this.onClickButton} className="button">Перейти на карту</button>
                        }
                    </div>
                    {this.state.jumpToMap ? <Redirect to='/map' component={MapWrapper} /> : null}
                </div>
            </div >
        );
    }
}

export const ProfileWrapper = connect(
    (state) => ({
        profileData: state.profileReducer.profileData,
        profileSave: state.profileSaveReducer.profileSave,
        requiredForm: state.requiredFormReducer.requiredForm
    }),
    { profileSend, profileSaveComplete, requiredFormTrue, requiredFormFalse }
)(withStyles(formStyles)(Profile));