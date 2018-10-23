import React from 'react';
import SelectOption from './SelectOption';

const Select = ({ option, action }) => {
    return (
        <select name={option} onChange={action}>

            <SelectOption value="" currency="Select an option" />

            <SelectOption value="AUD" currency="Australian Dollar" />
            <SelectOption value="BGN" currency="Bulgarian Lev" />
            <SelectOption value="BRL" currency="Brazilian Real" />
            <SelectOption value="CAD" currency="Canada Dollar" />
            <SelectOption value="CHF" currency="Swiss Franc" />
            <SelectOption value="CNY" currency="Chinese Yuan Renminbi" />
            <SelectOption value="CZK" currency="Czech Koruna" />
            <SelectOption value="DKK" currency="Danish Krone" />
            <SelectOption value="EUR" currency="European Euro" />
            <SelectOption value="GBP" currency="British Pound" />
            <SelectOption value="HKD" currency="Hong Kong Dollar" />
            <SelectOption value="HRK" currency="Croatian Kuna" />
            <SelectOption value="HUF" currency="Hungarian Forint" />
            <SelectOption value="IDR" currency="Indonesian Rupiah" />
            <SelectOption value="ILS" currency="Israeli Shekel" />
            <SelectOption value="INR" currency="Indian Rupee" />
            <SelectOption value="ISK" currency="Icelandic Krona" />
            <SelectOption value="JPY" currency="Japanese Yen" />
            <SelectOption value="KRW" currency="South Korean Won" />
            <SelectOption value="MXN" currency="Mexican Peso" />
            <SelectOption value="MYR" currency="Malaysian Ringgit" />
            <SelectOption value="NOK" currency="Norwegian Krone" />
            <SelectOption value="NZD" currency="New Zealand Dollar" />
            <SelectOption value="PHP" currency="Philippine Peso" />
            <SelectOption value="PLN" currency="Polish Zloty" />
            <SelectOption value="RON" currency="Romanian Leu" />
            <SelectOption value="RUB" currency="Russian Ruble" />
            <SelectOption value="SEK" currency="Swedish Krona" />
            <SelectOption value="SGD" currency="Singapore Dollar" />
            <SelectOption value="THB" currency="Thai Baht" />
            <SelectOption value="TRY" currency="Turkish Lira" />
            <SelectOption value="USD" currency="US Dollar" />
            <SelectOption value="ZAR" currency="South African Rand" />

        </select>
    )
}

export default Select;
