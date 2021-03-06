function clear() {
    document.querySelector('.articles').innerHTML = "";
};

const apis = [
    `https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=sport&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
    `https://newsapi.org/v2/top-headlines?country=pl&category=entertainment&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`
];
/*Promise.all(apis.map(url =>
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
})));*/

function loadData(url) {
    fetch(url)
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        const news = data.articles;
        
        news.map(article => {
            const urlImg = article.urlToImage;
            url.substr(4, 10000).concat('https');

            const post = document.querySelector('.articles');
            post.innerHTML += `
               <article class="article animated fadeIn">
                   <figure class="articles__figure"> 
                       <a href="${article.url}" target="_blank">
                           <img class="article__image" src="${urlImg}" alt="">
                       </a>
                       
                       <figcaption class="article__figcaption">
                            <a href="${article.url}" class="article__title" target="_blank" 
                                <h3>${article.title}</h3>
                            </a>
                            <a class="article-author" rel="author">${article.source.name}</a>
                       </figcaption>
                   </figure>
                    <!--<p class="article-description">Description: ${article.description}</p>-->
               </article>`;
        });

    });
}
loadData(apis[0]);


const reqFirst = () => {
    loadData(apis[1]);
}

const reqSecond = () =>{
    loadData(apis[2]);
}

const reqThird = () => {
    loadData(apis[3]);
}

const reqFourth = () => {
    loadData(apis[4]);
}

const sourceData = {
    //"reqFirst": {},
    "reqSecond": {},
    "reqThird": {},
    "reqFourth": {},
    "reqFifth": {}
};

Promise.all([ reqFirst, reqSecond, reqThird, reqFourth]).then(values => {
    sourceData["reqSecond"] = values[0];
    sourceData["reqThird"] = values[1];
    sourceData["reqFourth"] = values[2];
    sourceData["reqFifth"] = values[3];
    return sourceData;
});