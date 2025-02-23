// 배열함수

// forEach

let names = ["jeong","heon","su"]
for(let i = 0; i<names.length;i++){
  console.log(names[i]);
}

function printName(item){
  console.log(item);
}

names.forEach(printName) 
// forEach 가 item 을 알아서 넣어준다.

names.forEach(function(item){      // printName  하나만 호출해서 쓸 경우.
  console.log(item);
});

names.forEach((item)=>{console.log(item)}) // 익명의 함수 일시적으로 한번 쓰고 끝날 경우

names.forEach((item,index)=>{console.log(item,index)});

// map
let data = names.map((item)=>{
  return item
})
console.log(data);

// forEach와 map 의 차이
// forEach는 반환하는 값이 없다. 변수를 만들어서 받을 필요가 없다.
// map은 반드시 배열을 반환한다.

// filter
// true 와 false로 떨어 지는 조건 중 참 인 것만 가져온다.
let Data = names.filter((item)=>{
  return item.names
})
console.log(Data);

//some
// return 조건을 만족하면 true 아니면 false 로 나타낸다.
let Data1 = names.some((item)=>{
  return item.names
})
console.log(Data1);

//every
// 모두가 조건에 해당하는지 true와 false
let Data2 = names.every((item)=>{
  return item.names
})
console.log(Data2);

//find
//
let Data3 = names.find((item)=>{
  return item.names
})
console.log(Data3);

// filter 와 find 의 차이
// filter 는 배열을 주고 find 는 해당 값만 준다.
// filter 는 해당 조건을 모두 반환한다.
// 반면, find 는 첫밴째로 찾은 하나의 값만 반환한다.

// findIndex
// 
let Data4 = names.findIndex((item)=>{
  return item.names
})
console.log("findIndex:",Data4);

