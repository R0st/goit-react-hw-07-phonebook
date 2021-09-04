import React from 'react'
import style from './ContactList.module.css'
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactOperations from '../../redux/contact-operations';
import contactsSelectors from '../../redux/contacts-selectors';

// 
const ContactList = ({ contacts, onDeleteContact }) => {
    // const dispatch = useDispatch();
    useEffect(() => {
        (contactOperations.fetchContact());
    });
    return (
    <ul className={style.ContactListUl}>
        {contacts.map(({ id, name, number }) => (
            <li className={style.ContactListLi} key={id}>
                <p>{name}: 
                    <span>{number}</span>
                </p> 
                <button 
                    className={style.ContactBtnDel}
                    onClick={()=>onDeleteContact(id)}>Delete</button>  
            </li>
        ))}
    </ul>
)
} 


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
// const getFilteredContacts = (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return allContacts.filter(({name}) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
//   }

// const mapStateToProps = (state) => {
//     const { filter, items } = state.contacts;
//     const newFilteredContacts = getFilteredContacts(items, filter);
//     return {
//         contacts: newFilteredContacts,
//     }  
// }
//составляем пропсы, происходит операция фильтров
const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getFilteredContacts(state),
})

const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(contactOperations.fetchContact()),
    onDeleteContact: (id) => dispatch(contactOperations.deleteContact(id)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
