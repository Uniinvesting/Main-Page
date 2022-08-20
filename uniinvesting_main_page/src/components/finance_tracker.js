import React from 'react'

export default function Finance_tracker() {
  return (
    <div id='finance-tracking'>
        <div className='centered-text space-top'>
            <h1>Track Your Finance - Easily!</h1>
        </div>
            <div className='row'>
                <div className='row-box'>
                    <div className='icon'>

                    </div>
                    <div className='finance-info'>
                        <h5>Total Income</h5>
                        <h2>$10,000.00</h2>
                    </div>
                </div>
                <div className='row-box'>
                    <div className='icon'>

                    </div>
                    <div className='finance-info'>
                        <h5>Total Expenses</h5>
                        <h2>$3,500.00</h2>
                    </div>
                </div>
            </div>
        </div>
  )
}
