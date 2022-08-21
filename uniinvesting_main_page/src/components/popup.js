import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Popup() {

    const closeWindow = () => {
        document.getElementById('popup').classList.toggle('hide');
    }

  return (
    <div id='popup'>
        <div className='left-align'><FontAwesomeIcon  icon={faXmark} onClick={closeWindow}/></div>
        <div className='centered'>Checkout the trending stocks...</div>
        <div className='trendingCryptoPrices'>
          <u><p> Crypto </p></u>
          <ul>
            <p><b>NKN</b>: $0.1790 <em>(+48.04%)</em></p>
            <p><b>Zebec Protocol</b>: $0.04666 <em>(+47.32%)</em></p>
            <p><b>BarnBridge</b>: $10.07 <em>(+14.91%)</em></p>
          </ul>
          <u><p> Stocks </p></u>
          <ul>
          <p><b>ECL</b>: 171.78 <em>(-3.60)</em></p>
          <p><b>Snow</b>: 153.94 <em>(-7.81)</em></p>
          <p><b>TGT</b>: 167.04 <em>(-6.01)</em></p>

          </ul>
        </div>
    </div>
  )
}
