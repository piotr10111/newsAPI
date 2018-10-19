const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.header__nav');
const hamburgerClose = document.querySelector('.hamburger-close');

const click = hamburger.addEventListener('click', function (event) {
    event ? event : event = window.event;
    event.preventDefault();
    this.style.display = "none";
    ul.classList.toggle('visible');
    hamburgerClose.style.visibility = "visible";
});

const apis = [
    `https://newsapi.org/v2/top-headlines?country=de&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`,
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

const reqFirst = fetch(apis[0])
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        console.log(data)
        const news = data.articles;
        
        news.map( article => {
             const post = document.querySelector('.articles');
            post.innerHTML += `
                <article class="article">
                    <figure class="articles__figure"> 
                        <a href="${article.url}" target="_blank">
                            <img class="article__image" src="${article.urlToImage}" alt="">
                        </a>
                    </figure>
                    <!--<header>
                        <a href="${article.url}" 
                            <h3 class="article-title">${article.title}</h3>
                        </a>
                        <a class="article-author" rel="author">${article.source.name}</a>
                    </header>-->
                    <!--<p class="article-description">Description: ${article.description}</p>-->
                </article>`;
        });
    });


const reqSecond = fetch(apis[1])
    .then(resp => {
        return resp.json()
    })
    .then(data => console.log(data));

const reqThird = fetch(apis[2])
    .then(resp => {
        return resp.json()
    })
    .then(data => console.log(data));

const reqFourth = fetch(apis[3])
    .then(resp => {
        return resp.json()
    })
    .then(data => console.log(data));

const reqFifth = fetch(apis[4])
    .then(resp => {
        return resp.json()
    })
    .then(data => console.log(data));

const sourceData = {
    "reqFirst": {},
    "reqSecond": {},
    "reqThird": {},
    "reqFourth": {},
    "reqFifth": {}
};

Promise.all([reqFirst, reqSecond, reqThird, reqFourth, reqFifth]).then(values => {
    sourceData["reqFirst"] = values[0];
    sourceData["reqSecond"] = values[1];
    sourceData["reqThird"] = values[2];
    sourceData["reqFourth"] = values[3];
    sourceData["reqFifth"] = values[4];
    return sourceData;
});


