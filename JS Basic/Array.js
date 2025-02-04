// 배열
// Pop : 배열 끝에 있는 아이템 제거
// Push : 배열 끝에 아이템 추가
// Includes : 배열에 아이템 포함이면 true 아니면 false
// indexOf : 아이템의 인덱스 번호 리턴
// slice : 시작점 ,끝점(미포함) 까지 배열을 복사해서 리턴
// splice : 시작점부터 개수만큼 실제 배열에서 아이템 제거
// length : 배열의 크기를 리턴
  // 배열은 [] 를 쓴다.


let animals= [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur", 
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum", 
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit", 
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
]

 console.log(animals);

animals.pop()
console.log(animals);

animals.push("Dog")
console.log(animals);

animals.push("Mosquito","Mouse","Mule")
console.log(animals);

console.log(animals.includes("Human"));

console.log(animals.includes("Cat"));

animals[animals.indexOf("Red deer")] = "deer"
console.log(animals);

animals.splice(animals.indexOf("Spider"),3)
console.log(animals);

animals.splice(animals.indexOf("Tiger"))
console.log(animals);

let New = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(New)