import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const currencies = [
        { curr: "$", label: "$ Dollar" },
        { curr: "£", label: "£ Pound" },
        { curr: "€", label: "€ Euro" },
        { curr: "₹", label: "₹ Rupee" }
    ]

    const [curr, setCurr] = useState("Currency (Pound)");
    const handleCurrChange = (e) => {
        setCurr(e.target.value);
    }
    return (
        <div className = "input-group-prepend">
            <label className="input-group-text">
                Currency
                <select onChange={handleCurrChange}>
                    {currencies.map((currency) => <option value={currency.curr}>{currency.label}</option>)}
                </select>
            </label>
        </div>
    );
}

export default Currency;