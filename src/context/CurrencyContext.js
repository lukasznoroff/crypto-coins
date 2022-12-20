import { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

function CurrencyContext({ children }) {

    const [currency, setCurrency] = useState('USD');
    const [icon, setIcon] = useState('$');

    useEffect(() => {
        if (currency === 'USD') {
            setIcon('USD')
        } else if (currency === 'EUR') {
            setIcon('EUR')
        } else if (currency === 'NOK') {
            setIcon('NOK')
        }

    }, [currency])
    return (
        <Crypto.Provider value={{ currency, icon, setCurrency }}>
            {children}
        </Crypto.Provider>
    )
}
export default CurrencyContext;

export const CurrencyState = () => {
    return useContext(Crypto);
}