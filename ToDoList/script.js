/**
 * 유저가 값을 입력한다. Done
 * +버튼을 입력하면, 할일이 추가된다Done
 * delete 버튼을 누르면 할일이 삭제된다.Done
 * check버튼을 누르면 할일이 사라지면서 밑줄이 그어진다.Done
 * 진행중 , 끝남 탭을 누르면 underline이 이동한다.Done
 * 끝난탭은 끝난 아이템만, 진행중은 진행중만 뜨게 한다.Done
 * 전체탭을 누르면 다시 전체 아이템으로 돌아오게 한다.Done
 * check버튼을 누르는 순간 true false Done
 * true이면 끝난걸로 간주하고 밑줄 긋기 Done
 * false 이면 안끝난걸로 간주하고 그대로 Done
 * 
 * enter key event 추가하기 Done
 * check , delete 버튼 눌렀을 때 ui 변경 
 * 할일 입력 후 자동으로 창 비우기 Done
 * 할일을 입력하지 않았을 때 추가 안되게 하기 Done
 * 앱 디자인 하기
 */

let taskInput = document.querySelector("#task_input");
let ButtonAdd = document.querySelector("#button_click");
let tabs = document.querySelectorAll(".task_name div");
let underLine = document.querySelector("#underline");
let taskList = [];
let mode ='all' // filter에서 전역변수로 설정 함. Render에서 쓰기 위해
let filterList = []; // filter에서 전역변수로 설정 함. Render에서 쓰기 위해
ButtonAdd.addEventListener("click", AddTask)
 
// click key event 만들기

// enter key event
taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    AddTask(event);
    this.value = ""; // 자동으로입력창 비우기
  }
});
//underline 을 제외한 모두 진행중 완료에 이벤트를 줘서 선택 
// 가능하게 하는 for문에서 underLine을 빼야 하기 때문에 1부터 시작한다.
for(let i = 1; i<tabs.length; i++){
  tabs[i].addEventListener("click",function(event){filter(event)})
}

function AddTask(){                // input에 button 입력 , 객체를 만들어서 추가했다.
  if(taskInput.value === ""){       // input에 입력하지 않을 경우 alert
   return alert("할일 입력");
  }
  let task = {                     
    id:randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete:false
  }
  taskList.push(task);
  console.log(taskList);
  Render();
}
function Render(){        
  // 화면에 보이는 UI 함수 , taskList[i]에서는 스트링인대 객체를 사용함으로써 taskList[i].taskContent 를 해줘야 한다.
  
   //* 현재 Render 는 taskList만을 보여준다. filterList 도 그려야 하기 때문에
  
   //* 1. 내가 선택한 탭에 따라서
  let list = [];
  if(mode === "all"){              
    list = taskList;   // all === taskLIst
  }else if(mode === "ongoing" || mode === "done"){      
    list = filterList; // ongoing , done === filterList || else 만 써도 됨.
  }
  //* 2. 리스트를 달리 보여준다.

  let resultHTML = "";
  for(let i=0;i<list.length;i++){
    if(list[i].isComplete == true){
      resultHTML += 
      `<div class="task task_done">
        <div>${list[i].taskContent}</div>         
        <div>
        <button onclick="checkComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
        <button onclick="deleteComplete('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
        </div> 
      </div>`;
    }
    else {
      resultHTML +=
      `<div class="task">
         <div>${list[i].taskContent}</div>         
         <div>
         <button onclick="checkComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
         <button onclick="deleteComplete('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
        </div> 
      </div>`;
    }
    
  }
  document.getElementById("task_board").innerHTML = resultHTML;

}
function checkComplete(id){          
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id === id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter(); // 진행중 , 완료 탭에서 추가 삭제 하면 바로 적용.
  
}
function deleteComplete(id){
  for(let i = 0; i<taskList.length; i++){
    if(taskList[i].id === id){
      taskList.splice(i,1);
      break;
    }
  }
  filter();  // 진행중 , 완료 탭에서 추가 삭제 하면 바로 적용.
  
console.log(taskList);
}
function filter(event){
  // console.log("filter",event.target.id); // target.id 는 id 값만 가져온다.
   if(event){          // underLine에 클릭 슬라이드 애니메이션 
    mode = event.target.id;
    underLine.style.width = event.target.offsetWidth + "px";
    underLine.style.left = event.target.offsetLeft + "px";
    underLine.style.top = 
    event.target.offsetTop + (event.target.offsetHeight - 4) + "px";
   } 
   
   filterList = []; // 필터된 리스트를 따로 만들어야 함.
  if(mode === "all"){
    // 전체 리스트
    Render();
  }else if(
    mode === "ongoing"){
      // 진행중 === (task.isComplete=false)
      for(let i=0 ; i<taskList.length; i++){
        if(taskList[i].isComplete === false){
          filterList.push(taskList[i]);
        }
      }
      Render();
  }else if(
    mode === "done"){
      // 끝 === task.isComplete=true
      for(let i = 0; i<taskList.length; i++){
        if(taskList[i].isComplete===true){
          filterList.push(taskList[i]);
        }
      }
    }
    Render();
}


 function randomIDGenerate(){
  return '_' + Math.random().toString(36).substr(2, 9);
}
