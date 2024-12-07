import {React , useState} from 'react'
import Coin from './Coin'
import "./coins.scss"
import Chart from './chart';
import { getChart } from '../../services/api';


const Coins = ({search ,coins , currency }) => {

  const [chart , setChart] = useState(null);
  const [coin , setCoin] = useState(null);

  const clickHandler = async (coin)=>{
    fetch(getChart(coin.id))
    .then(res=>res.json())
    .then(json=>(setChart(json) , console.log(json)))
    .then(setCoin(coin))
  }
  return (
    
    <div className='coins'>
     
      <table  className='coins-table' style={{width:"100%"}}>
        <thead>
          <tr className='head-row'>
            <th>Coin</th>
            <th>Name</th>
            <th>Price : {currency.toUpperCase()}</th>
            <th>24h</th>
            <th>Total Volume</th>

          </tr>
        </thead>
        <tbody>
        {
          !coins.length && search.length>0 && <td>no Coin found</td> 
        }
       {coins.map(coin =>
          <Coin coin={coin} currency={currency} clickHandler={clickHandler} />
        )}

        </tbody>
      </table>
        {!!chart&&<Chart setChart={setChart} chart={chart} coin={coin} />}
    </div>
  )
}

export default Coins
