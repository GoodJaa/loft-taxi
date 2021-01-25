import React, { Component } from 'react';
import '../styles/profile.css';
import '../styles/layout.css';
import '../styles/credit-card.css';
import { Logo, MCIcon } from "loft-taxi-mui-theme";
import { connect } from 'react-redux';
import { profileSend } from '../helpers/actions';
// import {withStyles} from '@matetial-ui/core';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {
                cardNumber: '',
                expiryDateMonth: '',
                expiryDateYear: '',
                cardName: '',
                cvc: '',
                token: ''
            }
        }
    }

    onInputChange = (e) => {
        const updateFormFields = this.state.formFields

        updateFormFields[e.target.name] = e.target.value

        this.setState({ formFields: updateFormFields });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        const { cardNumber, expiryDateMonth, expiryDateYear, cardName, cvc } = event.target;

        this.props.profileSend(
            cardNumber.value,
            `${expiryDateMonth.value}\\${expiryDateYear.value}`,
            cardName.value,
            cvc.value,
            this.state.token
        );

    }

    render() {
        const { cardNumber, expiryDateMonth, expiryDateYear, cardName, cvc } = this.state.formFields;

        return (
            <div className="profile-wrapper">
                <div className="profile">
                    <div className="profile__title-container">
                        <h1 className="profile__title">Профиль</h1>
                        <div className="profile__title-desc">Введите платёжные данные</div>
                    </div>
                    <div className="profile__main">
                        <form className="profile__form" id="form" onSubmit={this.onFormSubmit}>
                            <div className="profile__inputs-wrapper">
                                <div className="profile__input-wrapper">
                                    <label htmlFor="name" className="profile__label">
                                        Имя Владельца
                                    </label>
                                    <input
                                        className="profile__input"
                                        id="name"
                                        type="text"
                                        name="cardName"
                                        maxLength="20"
                                        value={cardName}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <div className="profile__input-wrapper">
                                    <label htmlFor="number" className="profile__label">
                                        Номер карты
                                    </label>
                                    <input
                                        className="profile__input"
                                        id="number"
                                        type="number"
                                        name="cardNumber"
                                        maxLength="20"
                                        value={cardNumber}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <div className="profile__inputs">
                                    <div className="profile__input-wrapper profile__input-wrapper--date">
                                        <label htmlFor="dateMonth" className="profile__label">
                                            MM/YY
                                        </label>
                                        <div className="profile__input-date">
                                            <input
                                                className="profile__input profile__input--month"
                                                id="dateMonth"
                                                type="number"
                                                name="expiryDateMonth"
                                                maxLength="2"
                                                value={expiryDateMonth}
                                                onChange={this.onInputChange}
                                            />
                                            <div className="profile__inputs-delimiter">/</div>
                                            <input
                                                className="profile__input"
                                                id="dateYear"
                                                type="number"
                                                name="expiryDateYear"
                                                maxLength="2"
                                                value={expiryDateYear}
                                                onChange={this.onInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="profile__input-wrapper">
                                        <label htmlFor="cvc" className="profile__label">
                                            CVC
                                        </label>
                                        <input
                                            className="profile__input"
                                            id="cvc"
                                            type="number"
                                            name="cvc"
                                            maxLength="3"
                                            value={cvc}
                                            onChange={this.onInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="credit-card-wrapper">
                            <div className="credit-card">
                                <div className="credit-card__header">
                                    <Logo className="credit-card__logo"/>
                                    <div className="credit-card__date-wrapper">
                                        <span className="credit-card__date">{this.state.formFields.expiryDateMonth}</span>
                                        <span>/</span>
                                        <span className="credit-card__date">{this.state.formFields.expiryDateYear}</span>
                                    </div>
                                </div>
                                <div className="credit-card__number">{this.state.formFields.cardNumber}</div>
                                <div className="credit-card__icons-container">
                                    <MCIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" form="form" className="button" value="Сохранить"/>
                </div>
            </div>
        );
    }
}

export const ProfileWrapper = connect(
    null,
    { profileSend }
)(Profile);