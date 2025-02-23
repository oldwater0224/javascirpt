// 객체 간단하게 만들기 (객체 초기화)

// let name = "heonsu"
// let age = 29

// let person ={name,age} 변수 이름이 키값과 동일할 때 사용

// console.log(person);

// 객체에서 변수를 꺼내오는 방법 - 위에것과 반대되는 방법
// let bts = {
//   name : "방탄소년단"
//   num : 7
// }

// let name = bts.name
// let member = bts.member

// let {name, num} = bts    -------------- 바로 상위와 같은 문법임

// console.log(name,num);

// 그러나 변수와 키값이 다르게 설정되는 경우에는 문법을 요약해서 쓰지 못한다.

// let name = "heonsu"
// let age = 29

// console.log("제 이름은",name , "입니다. 제 나이는",age,"입니다.");

// console.log(`제 이름은 ${name} 입니다. 제 나이는 ${age}입니다.`);

let array = [1,2,3]

// let a = array[0]
// let b = array[1]
// let c = array[2]

//let [a,b,c] = array        // ------------------ 바로 상위 문법과 같은 방식 

let [a,...rest] = array // spread 연산자 
console.log(rest);  //------------ rest 연산자 , 객체에서도 동일한 방법으로 사용 가능하다.
// a 를 뺀 나머지를 print 한다.

/**  rest 객체 활용 
 
 * let person = {
 * name : "heonsu"
 * age : 29
 * hansome ; true }
 * 
 * let {name,...restInfo} = person
 * console.log(name, restInfo);
 * 
 * 
 */

/** 배열 복사해서 합치기
 * 
 * let a = [1,2]
 * let b = [3,4]
 * let c = [5,6]
 * 
 * let result = [...a,...b,...c]  배열을 복사해서 가져온다.
 * console.log(result);
 */

// 함수 선언 요약
  function foo(){
    return "haha"
    console.log(hello);}
  // 화살표 함수
  let foo = ()=>{"haha"  // 함수가 한줄일 경우 return 생략이 가능함.
  console.log("hello")};

// 화살표 함수는 일반함수를 대체 할 수 없다.

  //화살표 함수 사용시 this에 대응하는 문제 ---------------- coding 을 하다가 this 를 사용할 경우에는 무조건 일반함수를 써야한다.
  // this 는 나 자신을 불러준 객체이다.
    let age = 17
    let person = {
    name : "heonsu"
    age : 29,
    getInfo : function(){
    console.log(age) } --------- 실행할 경우 전역변수인 17을 들고 온다. 
    console.log(this.age) ------- 를 실행할 경우 29 를 들고온다.
    
    person.getInfo()
   
 
