import React from 'react';
import { LoginWithAuth } from './Login';
import {render} from '@testing-library/react';

describe('Login', () => {
    it('renders correctly', () => {
        const {getByLabelText} = render(<LoginWithAuth/>)

        expect(getByLabelText('Email')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
    })
})