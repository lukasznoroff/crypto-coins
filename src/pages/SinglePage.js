import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SingleCoin } from '../constants/api';
import { CurrencyState } from '../context/CurrencyContext';
import Chart from '../components/Chart';
import styled from 'styled-components';

function SinglePage() {

  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const { currency } = CurrencyState();

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  useEffect(() => {
    fetchSingleCoin();
  }, [])
  console.log(coin);


  return (
    <Wrapper>
      <div className='container'>
        <div className='button-wrapper'>
          <Link className='btn' to={'/'} >Back to main page</Link>
        </div>
        {/* <img src={[coin?.image?.large]} alt="name" /> */}
        <div className='text-wrapper'>
          <h1>{coin?.name}</h1>
          <p className='text' dangerouslySetInnerHTML={{ __html: [coin?.description?.en] }}></p>
          <p>{coin?.market_data?.current_price?.[currency]}</p>
        </div>
        <Chart coin={coin} />
      </div>
    </Wrapper>
  )
}
export default SinglePage;

const Wrapper = styled.div`
display:flex;
width: 90vw;
margin: 0 auto;

.container {
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
  }
  .text {
    margin-bottom: 40px;
    line-height: 1.4;
  }
}

.button-wrapper {
  margin-left: auto;
  margin-top: 20px;
}
`;