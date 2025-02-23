const API_KEY = `1723a3d593d4445287963e68f0ccf9db`
const getLatestNews = () =>{
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);          // url 인스턴스
  const reSponse = fetch(url)
  console.log("hello world",url);
  
}
getLatestNews();
