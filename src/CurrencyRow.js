import React from 'react'

export default function CurrencyRow({ props }) {
    
    const {currencyOptions} = props
    
    
    return (
        <div>
            <input type="number" className="input"/>
            <select name="currency">
                {currencyOptions.map((currency) => (
                    <option key={option} value={currency}>{option}</option>
                ))}
            </select>
        </div>
    )
}
