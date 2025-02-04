 let menu = 2
// if(menu == 1){
//   console.log("물건사기")
// }else if(menu == 2){
//   console.log("잔고확인")
// }else if(menu == 3){
//   console.log("히스토리 확인")
// }else{
//   console.log("홈으로 돌아가기")
// }

// switch(menu){
//   case 1 : 
//     console.log("물건사기")
//     break;
//   case 2 :
//     console.log("잔고확인")
//     break;
//   case 3 :
//     console.log("히스토리 확인")
//     break;
//   default :
//   console.log("홈으로 돌아가기")
//}

// switch 문은 간결하게 사용할 수 있으나 조건이 비교식일때는 쓸수 없고 case값이 딱 정해진 경우에만 쓸수 있다.



// if(menu<=3){
//   console.log("범위 안")
// }else {
//   console.log("범위 밖")
// }


// 삼항연산식
// 조건 뒤에 ? 를 붙여서 true 일 때 : false 일때  로 쓴다.
let answer = menu <=3?"범위 안" : "범위 밖"
console.log(answer)