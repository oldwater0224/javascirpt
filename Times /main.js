const API_KEY = `1723a3d593d4445287963e68f0ccf9db`
let NewsList = []
const getLatestNews = async () =>{
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);          // url 인스턴스
  const reSponse = await fetch(url)
  const data = await reSponse.json();
  NewsList = data.articles;
  Render(); // 데이터를 받아 온 후에 함수를 호출해야 동기통신이 맞다.
  console.log("hello world",NewsList);
  
}

const Render=()=>{
  const newsHTML = NewsList.map((news) => `<div class="flex justify-between max-w-1/ px-4 mt-4 border-b-[1px] pb-3">
        <div class="columns-lg-4 pr-4">
          <img class="news-image-size img-fluid" src=${news.urlToImage}>
        </div>
        <div class="columns-lg-8">
          <h2 class = "text-3xl">${news.title}</h2>
          <p>${news.description}</p>
          <div>${news.source.name},[${news.publishedAt}]</div>
        </div>
      </div>`
).join('');   // 화면에 배열을 프린트하기 때문에 , 가 생긴다
              // 배열을 string타입으로 바꾸면 해결된다. array to string javascript
              // join('') - join에 빈 문자열을 넣으면 , 가 사라진다.
              // array 에서 string으로 변환.




  document.getElementById("news-board").innerHTML=newsHTML;
}
getLatestNews();



