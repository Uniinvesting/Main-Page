import React from 'react'
import {investing_scroll} from './data/scroll_one'

export default function Scroll_section_one() {
  return (
    <div className='scroll-section'>
        <a href=''>
            <div className='article-box section-box'>
                <h1>Investing</h1>
                <h3>Explore</h3>
            </div>
        </a>
        {investing_scroll.map((data, key) => {
            return (
                <a href={data.link}>
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
