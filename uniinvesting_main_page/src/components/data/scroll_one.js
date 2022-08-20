
// Cohere
const cohere = require('cohere-ai');
cohere.init('UN4toLPSBP9nsovrtmfO5M8u1X8nYDV3NdaWNgA5');

async function parse() {
    const response = await cohere.generate({
        model: 'xlarge',
        prompt: 'Buying a stock is easy, but buying the right stock without a time-tested strategy is incredibly hard. So what are the best stocks to buy now or put on a watchlist?\n\nTLDR:',
        max_tokens: 10,
        temperature: 0.5,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: 'NONE'
      })
    return response.body.generations[0].text
}

async function start() {
    const wait = await parse()
    return wait
}

// Data to load
let investing_scroll = [
    {
        name: 'lorem ipsum',
        link: '',
        id: 'invest-article-1',
        author: 'Andrian Polak',
        description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
    },
    {
        name: 'lorem ipsum',
        id: 'invest-article-2',
        author: 'Andrian Polak',
        link: '',
        description: ""
    },
    {
        name: 'lorem ipsum',
        id: 'invest-article-3',
        author: 'Andrian Polak',
        link: '',
        description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
    },
    {
        name: 'lorem ipsum',
        id: 'invest-article-4',
        link: '',
        author: 'Andrian Polak',
        description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
    },
    {
        name: 'lorem ipsum',
        id: 'invest-article-5',
        link: '',
        author: 'Andrian Polak',
        description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
    }
]

(async () => {
    investing_scroll[1]["description"] = await start();
})()