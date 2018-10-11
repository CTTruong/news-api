
let newsList = document.getElementById("newsList")



let articlesItem = news.articles.map(function(n){



return `
<li>
  <img src="${n.urlToImage}" class="picture" >
  <h5 >${n.title} ${n.author}</h5>
  <p>${n.description}</p>
  <p>${n.publishedAt}</p>
  <a href="${n.url}" target="_blank"><button>Show more</button></a>
 </li>
`





})
newsList.innerHTML = articlesItem.join('')
