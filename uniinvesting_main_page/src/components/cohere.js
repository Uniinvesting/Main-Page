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

// (async () => {
//     console.log(await start())
// })()