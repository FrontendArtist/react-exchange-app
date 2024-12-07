import {React , useState} from 'react'
import {getChart} from '../../services/api'

const Coin = ({coin , currency , clickHandler}) => {


  let price = true;
  const posClass = {
    color:"green"
  }
  const negClass={
    color:"red"
  }

  coin.price_change_percentage_24h < 0 ? price = false :price=true;

  return (
<tr key={coin.id} id={coin.id} className='coin' onClick={()=>clickHandler(coin)} > 
  <td className='coin-symbol'>
    <img src={coin.image} alt={coin.symbol} />
    {coin.symbol}
  </td>
  <td>{coin.name}</td>
  <td>
    {
      currency === "eur" ? '€ ' : '$ '
    }
    {coin.current_price.toLocaleString()}
    </td>
  <td style={price?posClass : negClass}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
  <td>{coin.total_volume.toLocaleString()}</td>
</tr>
  
  )
}

export default Coin