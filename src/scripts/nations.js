const poland = document.querySelector('.poland');
const usa = document.querySelector('.usa');
const germany = document.querySelector('.germany');
const france = document.querySelector('.france');
const england = document.querySelector('.england');

function country(url) {
    clear();
    fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const news = data.articles;
            news.map(article => {
                const post = document.querySelector('.articles');
                post.innerHTML += `
               <article class="article animated fadeIn">
                   <figure class="articles__figure"> 
                       <a href="${article.url}" target="_blank">
                           <img class="article__image" src="${article.urlToImage}" alt="">
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
        })
}

poland.addEventListener('click', () => {
    country( `https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb` );
})
england.addEventListener('click', () => {
    country( `https://newsapi.org/v2/top-headlines?country=gb&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb` );
})
usa.addEventListener('click', () => {
    country( `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb` );
})
germany.addEventListener('click', () => {
    country( `https://newsapi.org/v2/top-headlines?country=de&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb` );
})
france.addEventListener('click', () => {
    country( `https://newsapi.org/v2/top-headlines?country=fr&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb` );
})

