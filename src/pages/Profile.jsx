import React, { Component } from 'react';
import '../styles/profile.css'
import { Input, FormLabel } from '@material-ui/core';
import { Logo, MCIcon } from "loft-taxi-mui-theme";
import { connect } from 'react-redux';
import { profileEdit, profileSend } from '../helpers/actions'


class Profile extends Component {

    onInputChange = (e) => {
        const updateFormFields = {...this.props.profile};
        updateFormFields[e.target.name] = e.target.value

        profileEdit(updateFormFields)
    }

    onFormSubmit(event) {
        event.preventDefault();

        const {cardNumber, expiryDate, cardName, cvc} = event.target
        console.log('submit')
        return profileSend(cardNumber.value, expiryDate.value, cardName.value, cvc.value)
    }

    render() {
        const {cardNumber, expiryDate, cardName, cvc} = {...this.props.profile}

        return (
            <div className="profile-wrapper">
                <div className="profile">
                    <div className="profile__title-container">
                        <h1 className="profile__title">Профиль</h1>
                        <div className="profile__title-desc">Введите платёжные данные</div>
                    </div>
                    <form className="profile__form" onSubmit={(event) => this.onFormSubmit(event)}>
                        <div className="profile__inputs-wrapper">
                            <FormLabel htmlFor="name">
                                Имя Владельца
                            </FormLabel>
                            <Input
                                id="name"
                                type="text"
                                name="cardName"
                                value={cardName}
                                onChange={this.onInputChange}
                                className="profile__input"
                            />
                            <FormLabel htmlFor="number">
                                Номер карты
                            </FormLabel>
                            <Input
                                id="number"
                                type="number"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={this.onInputChange}
                                className="profile__input"
                            />
                            <div className="profile__inputs">
                                <FormLabel htmlFor="date">
                                    MM/YY
                                </FormLabel>
                                <Input
                                    id="date"
                                    type="number"
                                    name="expiryDate"
                                    value={expiryDate}
                                    onChange={this.onInputChange}
                                    className="profile__input"
                                />
                                <FormLabel htmlFor="cvc">
                                    CVC
                                </FormLabel>
                                <Input
                                    id="cvc"
                                    type="number"
                                    name="cvc"
                                    value={cvc}
                                    onChange={this.onInputChange}
                                    className="profile__input"
                                />
                            </div>
                        </div>
                        <div className="credit-card">
                            <div className="credit-card__header">
                                <Logo className="credit-card__logo"/>
                                <div className="credit-card__date">{expiryDate}</div>
                            </div>
                            <div className="credit-card__number">{cardNumber}</div>
                            <div className="credit-card__icons-container">
                                <MCIcon className="credit-card__icon" />
                            </div>
                        </div>
                        <input type="submit" className="button" value="Сохранить" />
                    </form>
                </div>
            </div>
        );
    }
}

export const ProfileWrapper = connect(
    (state) => ({ profile: state.profileReducer.profile }),
    { profileEdit, profileSend }
)(Profile);