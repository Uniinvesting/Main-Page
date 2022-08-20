import React from 'react'
import puppeteer from "puppeteer"

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await browser.close()
}

export default function web_scraper() {
    start()
    return (
        <div>
            Hello world
        </div>
    )
}