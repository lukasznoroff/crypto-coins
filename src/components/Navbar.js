import { Link } from 'react-router-dom';
import { CurrencyState } from '../context/CurrencyContext';
import { ReactComponent as Logo } from '../images/bitcoin.svg';
import styled from 'styled-components';


const Navbar = () => {
  const { currency, setCurrency } = CurrencyState();

  return (
    <StyledNavbar>
      <Link className='logo' to='/'>
        <Logo />
      </Link>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          <optgroup label="Your Currency">
            <option value={"USD"}>USD</option>
            <option value={"EUR"}>EUR</option>
            <option value={"NOK"}>NOK</option>
          </optgroup>
        </select>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  min-height: 10vh;
  margin: 0 auto;
  color: #000;
  border-bottom: 1px solid #000;
  .logo svg {
    width: 88px;
    height: 88px;
  }
`;






