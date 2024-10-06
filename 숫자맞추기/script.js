 
/* 랜덤번호 지정
 유저의 번호 입력 그리고 실행버튼
 만약 유저가 랜덤번호를 맞추면 , 정답처리
 랜덤번호가 입력보다 작으면 down
 반대일 경우는 up
 reset 버튼의 활성화
 5번의 기회를 사용할 경우 button 비활성화
유저가 1~100 밖에 번호를 입력할 경우 알림 , 기회는 비차감
같은 숫자를 입력할 경우 알림 , 기회 비차감 */ 

let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let history = [];

//let resultSum = document.getElementById("result-summary");


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=""}) // 유저인풋에 클릭했을때 내용을 없앤다.

function pickRandomNum(){
  computerNum =Math.floor (Math.random() * 100 )+1; // Math.radom 0~1 사이에 랜덤한 숫자를 뽑을 수 있게 도와주는 함수
  console.log("정답",computerNum);
  resultArea.textContent =`${computerNum}`;
  
  
}
function play(){
  let userValue = userInput.value;
  if(userValue < 1 || userValue > 100){
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주세요."
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다."
    return;
  }
  chances --;
  chanceArea.textContent = `남은기회:${chances}번`; // 정적인 값과 동적인 값을 같이 사용할때 쓰는 함수
  console.log("chance",chances);

  if(userValue < computerNum){
    resultArea.textContent = "Up!!"
  }else if(userValue > computerNum){
    resultArea.textContent = "Down!!"
  }else{
    resultArea.textContent = "정답입니다."
    gameOver = true
  }

  history.push(userValue)
  console.log(history);
  if(chances<1){
    gameOver=true
  }
  if(gameOver==true){
    playButton.disabled = true;
    
  }
}
function reset(){
// user input 창 정리
// 새로운 번호 생성
// reset 작동시 남은 기회 초기화
// Go 버튼 재활성화
userInput.value = ""
pickRandomNum();
chances = 3;
chanceArea.innerHTML = `남은 기회 : ${chances}번`;
gameOver = false;
playButton.disabled = false;
history = [];
}
pickRandomNum()