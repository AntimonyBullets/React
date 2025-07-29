import React from "react";

function InputBox({
    label, 
    amount,
    selectedCurrency = "usd",
    currencyOptions,
    onAmountChange,
    onCurrencyChange,
    amountDisabled = false
}) {
    return (
        <div className="w-1/2 h-[170px] mx-auto mt-10 bg-amber-100 border-4 border-blue-500 flex flex-col justify-between p-4">
    {/* Top row */}
    <div className="flex justify-between items-start">
        <label className="text-gray-700 font-medium">{label}</label>
        <span className="text-gray-700 font-medium">Currency Type</span>
    </div>
    
    {/* Bottom row */}
    <div className="flex justify-between items-end">
        <input 
            type="number" 
            className="bg-amber-50 border-2 border-blue-400 px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-600"
            placeholder="Enter amount"
            value = {amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            disabled = {amountDisabled}
        />
        <select 
            className="bg-amber-50 border-2 border-blue-400 px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-600"
            value={selectedCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange((e.target.value))}
        >
            {currencyOptions?.map((currency)=>
                <option key={currency} value={currency}>{currency}</option>
            )}
        </select>
    </div>
</div>
    )
}

export default InputBox;