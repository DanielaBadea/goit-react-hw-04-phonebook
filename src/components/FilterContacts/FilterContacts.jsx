import React from 'react';
import styles from './FilterContacts.module.css';
import PropTypes from 'prop-types';

function Filter ({filter, onAddFilter}){
        return(
            <div className={styles.containerFilter}>
                <h3 className={styles.titleFilter}>Find contacts by name:</h3>
                <input
                className={styles.filterInput}
                 type = "text"
                 name = "filter"
                 value={filter}
                 placeholder="Contacts"
                 onChange={onAddFilter}
                required
                 />
            </div>
        )
    };

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onAddFilter: PropTypes.func.isRequired,
}
export default Filter;