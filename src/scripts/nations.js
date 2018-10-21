const poland = document.querySelector('.poland');

poland.addEventListener('click', () => {
    clear();
    fetch(apis[0])
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const news = data.articles;
            news.map(article => {
                const post = document.querySelector('.articles');
                post.innerHTML += `
               <article class="article">
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
})

const usa = document.querySelector('.usa');

usa.addEventListener('click', () => {
    clear();
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const news = data.articles;
            news.map(article => {
                const post = document.querySelector('.articles');
                post.innerHTML += `
               <article class="article">
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
})

const germany = document.querySelector('.germany');

germany.addEventListener('click', () => {
    clear();
    fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const news = data.articles;
            news.map(article => {
                const post = document.querySelector('.articles');
                post.innerHTML += `
               <article class="article">
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
})

const france = document.querySelector('.france');

france.addEventListener('click', () => {
    clear();
    fetch(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=0f1d6f5ab7564ab09bc63df2a2fc6dcb`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const news = data.articles;
            news.map(article => {
                const post = document.querySelector('.articles');
                post.innerHTML += `
               <article class="article">
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
})