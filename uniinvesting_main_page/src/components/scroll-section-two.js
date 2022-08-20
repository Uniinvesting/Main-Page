import React from 'react'
import {personal_finance_scroll} from './data/scroll_two'

export default function Scroll_section_two() {
  return (
    <div className='scroll-section'>
        <a href='' className='scroll-a'>
            <div className='article-box section-box'>
                <h1>Personal Finance</h1>
                <h3>Explore</h3>
            </div>
        </a>
        {personal_finance_scroll.map((data, key) => {
            return (
                <a href={data.link} className='scroll-a'>
                    <div className='article-box' id={data.id} key={key}>
                        <h2>{data.name}</h2>
                        <h6>By: {data.author}</h6>
                        <p>{data.description}</p>
                    </div>
                </a>
            )
        })}
    </div>
  )
}
