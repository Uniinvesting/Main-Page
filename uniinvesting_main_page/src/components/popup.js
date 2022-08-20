import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Popup() {

    const closeWindow = () => {
        document.getElementById('popup').classList.toggle('hide');
    }

  return (
    <div id='popup'>
        <div class='left-align'><FontAwesomeIcon  icon={faXmark} onClick={closeWindow}/></div>
        <div class='centered'>Checkout the trending stocks...</div>
    </div>
  )
}
