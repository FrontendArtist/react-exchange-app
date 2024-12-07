import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import"./chart.scss"
import convertData from '../../helpers/convertData';

const Chart = ({setChart, chart , coin}) => {

  const [type , setType] = useState("prices")

  return (
    <div className='chartModal' >
      <div className='chart'>
      <span className='close' onClick={()=>{setChart(null)}}>X</span>
        <div className="coin-icon">
            <img src={coin.image} alt={coin.name} />   
            <p>{coin.name}</p>
        </div>
      <div className="graph">
        <Graph chart={convertData(chart , type) }  type={type} />
      </div>
      <div>
        <button className={type === 'prices' ?  'selected' : null } onClick={()=> setType("prices") }>Prices</button>
        <button  className={type === 'market_caps' ?  'selected' : null } onClick={()=> setType("market_caps") }>Market Caps</button>
        <button className={type === 'total_volumes' ?  'selected' : null } onClick={()=> setType("total_volumes") }>Total Volumes</button>
      </div>
      </div>
    </div>
  )
}

export default Chart ;

const Graph = ({chart , type})=> {
  return(
  <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={chart}>
                <Line type='monotone' dataKey={type}  stroke='#1a774c' strokeWidth='2px'/>
                <CartesianGrid stroke='#404042' />
                <YAxis dataKey={type} domain={["auto" , "auto"] }/>
                <XAxis dataKey="date" />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
  )
}