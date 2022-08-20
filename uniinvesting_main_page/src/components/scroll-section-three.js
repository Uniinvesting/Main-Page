import React from 'react'
import {crypto_scroll} from './data/scroll_three'

export default function Scroll_section_three() {
  return (
    <div className='scroll-section'>
        <a href=''>
            <div className='article-box section-box'>
                <h1>Crypto</h1>
                <h3>Explore</h3>
            </div>
        </a>
        {crypto_scroll.map((data, key) => {
            return (
                <a href=''>
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
