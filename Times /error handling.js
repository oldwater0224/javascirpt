
let hight = 160

try{
    // 소스코드를 쓴다
    // 이 안에서 에러가 발생하면
    if(hight<165){
      throw new Error("당신은 너무 작다.") 
      // throw는 에러를 강제로 발생시키는 것.
    }
}catch(error){
    // catch가 에러를 잡아준다.
    console.log("내가 잡은 에러는",error.message);
}
// 에러가 발생하는 순간 try문은 종료된다.