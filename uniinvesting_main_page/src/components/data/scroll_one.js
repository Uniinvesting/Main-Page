
// Cohere
// const cohere = require('cohere-ai');
// cohere.init('UN4toLPSBP9nsovrtmfO5M8u1X8nYDV3NdaWNgA5');

// async function parse() {
//     const response = await cohere.generate({
//         model: 'xlarge',
//         prompt: 'Buying a stock is easy, but buying the right stock without a time-tested strategy is incredibly hard. So what are the best stocks to buy now or put on a watchlist?\n\nTLDR:',
//         max_tokens: 10,
//         temperature: 0.5,
//         k: 0,
//         p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         stop_sequences: ["--"],
//         return_likelihoods: 'NONE'
//       })
//     return response.body.generations[0].text
// }

// async function start() {
//     const wait = await parse()
//     return wait
// }

// Data to load
export const investing_scroll = [
    {
        name: 'How to Start Investing in Stocks: A Beginner’s Guide',
        link: 'https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage',
        id: 'invest-article-1',
        author: 'Julius Mansa',
        description: "Investing is a way to set aside money while you are busy with life and have that money work for you."
    },
    {
        name: 'Five types of investment risk',
        id: 'invest-article-2',
        author: 'Amy Watson',
        link: 'https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage',
        description: "It’s a fundamental principal that to earn a higher return over time, you have to be comfortable taking on more risk in the short term. "
    },
    {
        name: 'Why start investing',
        id: 'invest-article-3',
        author: 'Andrew Hao',
        link: 'https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage',
        description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
    },
    {
        name: '5 investing myths debunked',
        id: 'invest-article-4',
        link: 'https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage',
        author: 'Andrian Polak',
        description: "There are so many misconceptions about investing and financial markets in general. "
    },
    {
        name: 'When and how to start investing',
        id: 'invest-article-5',
        link: 'https://articles-8zs0x8bm0-uniiinvesting.vercel.app/InvestingPage',
        author: 'Julian Xu',
        description: "If you’re asking, “when should I start investing?”, the short answer is as soon as you can. "
    }
]

// (async () => {
//     investing_scroll[1]["description"] = await start();
// })()