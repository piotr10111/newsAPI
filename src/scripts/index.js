const apis = [
    `https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=sport&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=business&entertainment&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`
];

Promise.all(apis.map(url =>
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
    })));

