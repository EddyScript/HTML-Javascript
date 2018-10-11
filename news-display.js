let newsList = document.getElementById("newsList")

let newsItem = news.articles.map(function(news1){
    return `
        <li>
        <p>${news1.author} </p>
        <p>${news1.title} </p> 
        <p>${news1.description} </p>
        <p>${news1.url} </p>
        <img src="${news1.urlToImage}"/ >
        <p>${news1.publishedAt} </p>
        <br>
        <br>
        </li>
    `
})
newsList.innerHTML = newsItem.join('')

console.log(newsItem)
