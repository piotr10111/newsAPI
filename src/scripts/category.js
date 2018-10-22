const tops = document.querySelector('.top'),
    business = document.querySelector('.business'),
    sport = document.querySelector('.sport'),
    tech = document.querySelector('.tech'),
    entertaitment = document.querySelector('.entertaitment');


function category(url) {
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

tops.addEventListener('click', () => {
    category(apis[0]);
})
business.addEventListener('click', () => {
    category(apis[1]);
})
sport.addEventListener('click', () => {
    category(apis[2]);
})
tech.addEventListener('click', () => {
    category(apis[3]);
})
entertaitment.addEventListener('click', () => {
    category(apis[4]);
})

