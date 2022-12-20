import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoinList } from '../constants/api';
import { CurrencyState } from '../context/CurrencyContext';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as Spinner } from '../images/spinner.svg';


function Hero() {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const { currency } = CurrencyState();
    const { icon, setIcon } = CurrencyState();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchCoins()
    }, [currency]);

    return (
        <Wrapper>
            <header className='header'>
                <h1>crypto coins</h1>
                <input type='text' placeholder='Find your coins' onChange={(e) => {
                    setSearch(e.target.value)
                }} />
            </header>


            {loading && <Spinner />}
            {coins && coins.filter((item) => {
                if (search === "") {
                    return item;
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return item;
                }
                return false


            }).map((item) => {

                const { id, name, image, current_price } = item;
                return (
                    <Link key={id} to={`/coins/${id}`} className="box">
                        <div className="icon-name">
                            <img src={image} alt={name} />
                            <p>{name}</p>
                        </div>
                        <p className="current-price">CURRENT PRICE:  {current_price} {icon}</p>
                    </Link>
                )
            })}
        </Wrapper>
    )
}
export default Hero;

const Wrapper = styled.div`
    .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 90vw;
        background-color: #c5c4c439;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 10px;

        .icon-name {
            display: flex;
            align-items: center;
        }

        p {
            margin-left: 20px;
        }
    }

    .header {
        display:flex;
        justify-content: space-between;
        width: 100%;
        max-width: 90vw;
        margin: 30px auto 40px;
        font-size: 30px;
    }
`;