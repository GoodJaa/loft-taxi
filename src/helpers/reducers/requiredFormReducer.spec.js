import {REQUIRED_FORM_FALSE, REQUIRED_FORM_TRUE} from '../actions'
import requiredFormReducer from './requiredFormReducer'

describe('requiredFormReducer', () => {
    it('form fields are filled', () => {
        expect(requiredFormReducer({}, {type: REQUIRED_FORM_TRUE, requiredForm: true})).toEqual({requiredForm: true})
    })
    it('form fields are not filled', () => {
        expect(requiredFormReducer({}, {type: REQUIRED_FORM_FALSE, requiredForm: false})).toEqual({requiredForm: false})
    })
})