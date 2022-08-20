import React from 'react'
import { expenses } from './data/expenses'
import { income } from './data/income'
import { investments } from './data/investments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PieChart, Pie, Tooltip } from "recharts";
import { faCoins, faMoneyBillTransfer, faSackDollar } from '@fortawesome/free-solid-svg-icons'

export default function Finance_tracker() {
    const income_data = [
        { name: "Bank of Montreal", value: 4500 },
        { name: "Upwork", value: 5000 },
        { name: "Product Selling", value: 500 }
    ];

    const expense_data = [
        { name: "Living", value: 1000 },
        { name: "Education", value: 1300 },
        { name: "Business", value: 1200 },
    ];

    const investment_data = [
        { name: "Apple Inc", value: 250 },
        { name: "Spotify", value: 100 },
        { name: "Wealthsimple", value: 200 },
        { name: "Rogers", value: 350 },
    ];
    
  return (
    <div id='finance-tracking'>
        <div className='centered-text space-top'>
            <h1>Track Your Finance - Easily!</h1>
        </div>
            <div className='row'>
                <div className='graph' id='graph-1'>
                    <PieChart width={250} height={250}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={income_data}
                            cornerRadius={0}
                            innerRadius={60}
                            outerRadius={80} 
                            fill="#c3d9ff"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className='graph' id='graph-2'>
                    <PieChart width={250} height={250}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={expense_data}
                            cornerRadius={0}
                            innerRadius={60}
                            outerRadius={80} 
                            fill="#c3d9ff"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className='graph' id='graph-3'>
                    <PieChart width={250} height={250}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={investment_data}
                            cornerRadius={0}
                            innerRadius={60}
                            outerRadius={80} 
                            fill="#c3d9ff"
                            label
                           /> 
                         <Tooltip />
                    </PieChart>
                </div>
            </div>
            <div className='row'>
                <div className='row-box'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faSackDollar} />
                    </div>
                    <div className='finance-info'>
                        <h5>Total Income</h5>
                        <h2>$10,000.00</h2>
                    </div>
                </div>
                <div className='row-box'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    </div>
                    <div className='finance-info'>
                        <h5>Total Expenses</h5>
                        <h2>$3,500.00</h2>
                    </div>
                </div>
                <div className='row-box'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCoins} />
                    </div>
                    <div className='finance-info'>
                        <h5>Total Investments</h5>
                        <h2>$1,000.00</h2>
                    </div>
                </div>
            </div>

            <div className='row'>
            <div id='income' className='transactions-list'>
                    {income.map((data, key) => {

                        const showMore = (e) => {
                            var box_id = e.target.id;
                            var more_info = box_id + 'more-info';
                            document.getElementById(more_info).classList.toggle('hide');
                        }

                        return(
                            <div className='list-block' key={key} id={data.income_id} onClick={showMore}>
                                <div className='row-left'>
                                    <div className='tr-block-1' id={data.income_id}>{data.income_name}</div>
                                    <div className='tr-block-2' id={data.income_id}>${data.income_amount.toFixed(2)}</div>
                                </div>
                                <div className='row-left hide' id={data.income_id + 'more-info'}>
                                    <div className='tr-block-4'>Source: {data.income_source}</div>
                                    <div className='tr-block-4'>Date: {data.income_date}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div id='expenses' className='transactions-list'>
                    {expenses.map((data, key) => {

                        const showMore = (e) => {
                            var box_id = e.target.id;
                            var more_info = box_id + 'more-info';
                            document.getElementById(more_info).classList.toggle('hide');
                        }

                        return(
                            <div className='list-block' key={key} id={data.expense_id} onClick={showMore}>
                                <div className='row-left'>
                                    <div className='tr-block-1' id={data.expense_id}>{data.expense_name}</div>
                                    <div className='tr-block-2' id={data.expense_id}>${data.expense_amount.toFixed(2)}</div>
                                </div>
                                <div className='row-left hide' id={data.expense_id + 'more-info'}>
                                    <div className='tr-block-3'>Type: {data.expense_type}</div>
                                    <div className='tr-block-3'>Category: {data.expense_category}</div>
                                    <div className='tr-block-3' style={{textAlign: 'revert'}}>Date: {data.expense_date}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div id='investment' className='transactions-list'>
                    {investments.map((data, key) => {

                        const showMore = (e) => {
                            var box_id = e.target.id;
                            var more_info = box_id + 'more-info';
                            document.getElementById(more_info).classList.toggle('hide');
                        }

                        return(
                            <div className='list-block' key={key} id={data.investment_id} onClick={showMore}>
                                <div className='row-left'>
                                    <div className='tr-block-1' id={data.investment_id}>{data.investment_name}</div>
                                    <div className='tr-block-2' id={data.investment_id}>${data.investment_amount.toFixed(2)}</div>
                                </div>
                                <div className='row-left hide' id={data.investment_id + 'more-info'}>
                                    <div className='tr-block-4'>Source: {data.investment_source}</div>
                                    <div className='tr-block-4'>Date: {data.investment_date}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
  )
}
