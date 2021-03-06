import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => async dispatch => {
    dispatch(fetchContactRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
}

// export const fetchContact = () => dispatch => {
//     dispatch(fetchContactRequest());
//     axios.get('/contacts')
//         .then(({ data }) => dispatch(fetchContactSuccess(data)))
//         .catch(error => dispatch(fetchContactError(error)))
// }


export const addContact = ( name, number ) => dispatch => {
    const contact = { name, number };
    dispatch(addContactRequest());
    axios.post(`/contacts`, contact)
        .then(({ data }) => dispatch(addContactSuccess(data)),
        )
        .catch(error => dispatch(addContactError(error)))
}

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
}