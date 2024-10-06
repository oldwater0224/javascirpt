// Object(객체)
// {} 를 쓴다.
let patient = {
  name : "Heonsu",
  age : 29,
  disease : "cold"
}
console.log(patient);
console.log(patient.name);

// name 은 키값(Key) , Heonsu 는 값(Value)

console.log(patient["name"]);

patient.name = "JK"
patient.age = "39"
patient["age"] = 39
console.log(patient);

let patientList = [{name : "Heonsu" , age : 29}, {name : "JK", age : 39}, {name : "Doho", age : 19}]
console.log(patientList);

console.log("첫번째 환자는:" ,patientList[0]);
console.log("첫번째 환자의 나이는 :",patientList[0].age);
console.log("첫번째 환자의 나이는 :",patientList[0]["age"]);

console.log("두번째 환자의 이름은 :",patientList[1]["name"]);