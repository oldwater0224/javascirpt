// console.log("빵 두기")
// console.log("상추 두기")
// console.log("고기패티")
// console.log("뚜껑 덮기")

// console.log("감튀박스 선택")
// console.log("감튀 담기")



// console.log("콜라통 선택")
// console.log("콜라담기")

function MakeBurger(type){
  console.log("빵 두기")
  console.log("상추 두기")
  if(type == "불고기"){
    console.log("고기패티두기")
  }else if(type == "새우"){
    console.log("새우패티두기")
  }
  console.log("고기패티")
  console.log("뚜껑 덮기")
}

function ServeCoke(){
  console.log("콜라통 선택")
  console.log("콜라담기")

}
 MakeBurger() // 함수 실행 명령어

MakeBurger("새우")

// return 을 만나면 함수가 끝난다.
// 함수와 리턴에 대한 심도 있는 분석이 필요함

// 함수 안에 함수 묶기
function makeSet(){
  MakeBurger()
  ServeCoke()
}