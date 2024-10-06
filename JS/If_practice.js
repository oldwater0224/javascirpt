let number = ''
if(number<0){
  console.log("음수입니다.")}
else if(number>0){
  console.log("양수입니다.")
}
else{
  console.log("0입니다.")
}

let point = ''
let section = ''
if(point>=90 && point<=100){
  section = "A"
}else if(point>=80 && point<=89){
  section = "B"  
}else if(point>=70 && point<=79){
  section = "C"
}else if(point>=60 && point<=69){
  section = "D"
}else if(point>=0 && point<=59){
  section = "F"
}else{
  console.log("오류")
}
console.log(section);


let skills = ["HTML", "CSS", "JAVASCRIPT","REACT"]
if(skills.includes("JAVASCRIPT") && skills.includes("REACT")){
  console.log("합격")
}else if(skills.includes("JAVASCRIPT") || skills.includes("REACT")){
  console.log("예비")
}else if(skills.includes("HTML") && skills.includes("CSS")){
  console.log("공부를 더 해야겠지요?")
}else{
  console.log("탈락")
}