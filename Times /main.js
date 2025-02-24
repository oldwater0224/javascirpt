const API_KEY = `1723a3d593d4445287963e68f0ccf9db`
let News = []
const getLatestNews = async () =>{
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);          // url 인스턴스
  const reSponse = await fetch(url)
  const data = await reSponse.json();
  News = data.articles;
  console.log("hello world",News);
  
}
getLatestNews();
