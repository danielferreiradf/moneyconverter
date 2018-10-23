import React from 'react';

const SelectOption = ({ value, currency }) => {
    return (
        <option value={value}>{currency}</option>
    )
}

export default SelectOption
