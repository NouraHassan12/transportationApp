import { combineReducers } from 'redux'
import companies from './companies'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    companies,
    form: formReducer
})