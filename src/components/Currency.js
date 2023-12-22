import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const currencies = [
        { curr: "£", label: "£ Pound" },
        { curr: "$", label: "$ Dollar" },
        { curr: "€", label: "€ Euro" },
        { curr: "₹", label: "₹ Rupee" }
    ]

    const [curr, setCurr] = useState("Currency (Pound)");
    const handleCurrChange = (e) => {
        setCurr(e.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <div className="input-group mb-3">
        <div className = "input-group-prepend">
            <label className="input-group-text">
                Currency
                </label>
                </div>
                <select className="custom-select" onChange={handleCurrChange}>
                    {currencies.map((currency) => <option value={currency.curr}>{currency.label}</option>)}
                </select>
        </div>
    );
}

export default Currency;