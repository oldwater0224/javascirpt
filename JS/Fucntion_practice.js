//1번 문제
function greet(){
  console.log("안녕 내 이름은 제시카야")
}

//2번 문제
function greet(name){
  console.log("안녕 내 이름은",name ,"이야")
}
//3번 문제
function greet(name){
  console.log("안녕 내 이름은",name,"이야")
  return name
}
const name = greet("헌수")
console.log("안녕 내 이름은",name,"야")

//4번 문제
function meetAt(year,month,date){
  if(year && month && date){     // year && month 는 date 값이 있다는 전제이기 때문에 생략이 가능하다.
    return `${year}/${month}/${date}`
  }else if(year && month){
    return `${year}년 ${month}월`
  }else if(year){
    return `${year}년`
  }
  
}
console.log(meetAt(2022,1,7))

// undefined 는 false를 return 한다.
// if 문은 가장 작은 단위부터 큰 단위 순으로 작성해야한다.

//5번 문제
function findSmallestElement(arr){
  if(arr.length == 0){    // arr 이 비어있다는 뜻.
    return 0
  }
  let result = arr[0]
  for(let i = 1;i<arr.length;i++){
    if(result > arr[i]){
      result = arr[i]
    }
  }

  return result
}
console.log(findSmallestElement([100,200,3,5,2,1]))


//6번 문제
let unit = [50000,10000,5000,1000,500,100]
function Logic(money){
  console.log(money)
  for(let i = 0;i<unit.length;i++){
    let num = Math.floor(money / unit[i]) // Math.floor에서 floor는 "버림"이라는 뜻. 
    console.log(`${unit[i]}X${num}`)
    money = money - (unit[i] * num)
    
  }
}
Logic(12300)