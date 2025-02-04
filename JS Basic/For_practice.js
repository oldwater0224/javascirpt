// 1에서 100까지 더하기
let plus = 0
for(let i = 1;i<100;i++){
  plus+=i
}
console.log(plus) // 4950

// 홀수만 출력
for(let i = 1;i<=100;i+=2){
  console.log(i)
}

// 369 문제
for(let i = 1;i<=50;i++){
  let stringValue = i.toString() // 숫자타입을 String타입으로 바꾸는 함수
  let result = ""
  for(let j = 0;j<stringValue.length;j++){
    if(stringValue[j] === "3" || stringValue[j]==="6" || stringValue[j] === "9"){
      result+="짝"
    }
  }
  console.log(result.length>0?result:i)
}
// 소수 구별 문제
let al = 7
let Some = true
if (al===1){
  Some = false
}else{
  for(let i = 2;i<al;i++){
    if(al % i == 0){
      Some = false
    }
  }
}
console.log(Some)