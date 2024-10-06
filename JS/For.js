// for(let i = 0;i<10;i++){
//   console.log("hello",i)
// }

// 구구단
for(let i=2;i<=9;i++){
  for(let j=1;j<=9;j++){
    console.log(i+'*'+j+'='+i*j)
  }
}
// for 문은 범위를 정확히 알고 있을 때 사용한다.
let i = 2
while(i<10){
  console.log("while 문 실행",i)
  i++;
}

// For of
let fruit = ['apple', 'banana', 'mango', 'strawberry','pineapple']

// for(let i = 0;i<fruit.length;i++){
//   console.log("내가 좋아하는 과일은",fruit[i])
// }

for(let item of fruit){
  console.log("내가 좋아하는 과일",item)
}
let sentence = 'hello'
for(let char of sentence){
  console.log("char",char)
}
// 단점은 detail이 좀 부족하다.

// For in
let person = {
  name : "Ar",
  age : 29,
}

for(let key in person){
  console.log("key",key)
}
// 객체안에 있는 값이 변하는 상황에서 주로 가져온다.