const apis = [
    `https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=sport&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=business&entertainment&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`
];

/*Promise.all(apis.map(url =>
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
})));*/

const findAPI = apis.map( el => {
    return el;
})
console.log(findAPI);
const reqFirst = fetch( apiOne )
    .then( resp => { 
        return resp.json()
    })
    .then( data => console.log( data ));


const reqSecond = fetch( apiTwo )
    .then( resp => {
        return resp.json()
    })
    .then( data => console.log (data ));

const sourceData = {
    "reqFirst":{},
    "reqSecond":{}
};

Promise.all( [reqFirst,reqSecond] ).then( values => {
    sourceData[ "reqFirst" ] = values[0];
    sourceData[ "reqSecond" ] = values[1];
    return sourceData;
});
console.log('xd');



