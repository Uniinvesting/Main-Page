import React from 'react'
import {investing_scroll} from './data/scroll_one'

export default function Scroll_section_one() {
  return (
    <div className='scroll-section'>
        <a href='https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage' className='scroll-a'>
            <div className='title-box-investing'>
                <h1>Investing</h1>
                <h3>Explore</h3>
            </div>
        </a>
        {investing_scroll.map((data, key) => {
            return (
                <a href={data.link} className='scroll-a' key={key}>
                    <div className='article-box' id={data.id} style={{backgroundColor:'#eaffd9'}}>
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
