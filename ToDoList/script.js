/*
유저는 할일을 추가할 수 있다.
각 할일에 삭제와 체크버튼이 있다.
삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
1. check 버튼을 클릭 하면 true false
2. true 이면 끝난걸로 간주하고 밑줄 보여주기
3. false 이면 끝나지 않은걸로 간주하고 그대로
끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
모바일 버전에서도 확인할 수 있는 반응형 웹이다
*/

let TaskInput = document.querySelector("#task_input");
let AddButton = document.querySelector("#plus_button");
let Tabs = document.querySelectorAll(".task_tabs div");

let TaskList = [];
let mode = "all";
let filterList = [];
AddButton.addEventListener("mousedown",AddTask);
TaskInput.addEventListener("keydown",function(event){
  if(event.keycode === 13 ){
    AddTask(event)
  }
});

for(let i=1;i<Tabs.length;i++){
  Tabs[i].addEventListener("click",function(event){filter(event)})
}


function AddTask(){
  
  let Task = {
    id:RandomIdGenerate(),
    TaskContent : TaskInput.value,
    isComplete:false
  }
  TaskList.push(Task);
  console.log(TaskList);
  Render();
}
function Render(){
  // 1. 내가 선택한 탭에 따라서
  let List = [];
  if(mode === "all"){
    List = TaskList;
    // all tasklist
  }else if(mode === "ongoing" || mode === "done"){
      // ongoing, done filterList
      List = filterList;
  }

  // 2. 리스트를 달리 보여준다.
  

  let ResultHTML = "";
  for(let i = 0;i<List.length;i++){
    if(List[i].isComplete == true){
      ResultHTML +=
      `<div class="task">
      <div class=task_done>${List[i].TaskContent}</div>
          <div>
            <button onclick="ToggleComplete('${List[i].id}')">Check</button>
            <button onclick="DeleteTask('${List[i].id}')">Delete</button>
          </div>
      </div>`
    }else{
      ResultHTML +=`<div class="task">
      <div>${List[i].TaskContent}</div>
          <div>
            <button onclick="ToggleComplete('${List[i].id}')">Check</button> 
            <button onclick="DeleteTask('${List[i].id}')">Delete</button>
          </div>
      </div>`
    }
    /* onclick : 클릭 이벤트 생성 */
    
  }
  document.querySelector("#task_board").innerHTML = ResultHTML;
}

function ToggleComplete(id){
  for(let i=0;i<TaskList.length;i++){
    if(TaskList[i].id == id){
      TaskList[i].isComplete=!TaskList[i].isComplete; /** !는 not이다.현재 value에 반대값을 가져온다 true면 false , false면 true*/
      break;
    }
  }
  Render();
  console.log(TaskList);
}
function DeleteTask(id){
  for(let i=0;i<TaskList.length;i++){
    if(TaskList[i].id == id){
      TaskList.splice(i,1);
      break;
    }
  }
  Render(); /** 값을 업데이트 하면 ui도 업데이트 꼭 해주기!! */
}

function filter(event){
  console.log("filter",event.target.id);
  mode = event.target.id
  filterList = [];
  if(mode === "all"){
    //전체 리스트를 보여준다.
    Render();
  }else if(mode=== "ongoing"){
    // 진행중인 아이템을 보여준다.
    // Task.IsComplete = false 이면 진행중이다.
    for(let i=0;i<TaskList.length;i++){
      if(TaskList[i].isComplete === false){
        filterList.push(TaskList[i]);
      }
      Render();
    }
  }else if(mode == "done"){
    // 끝나는 케이스
    // Task.IsComplete = true  이면 끝난다.
    for(let i =0;i<TaskList.length;i++){
      if(TaskList[i].isComplete===true){
        filterList.push(TaskList[i]);
      }
    }
    Render();
  }
}

function RandomIdGenerate(){
  return '_' + Math.random().toString(36).substr(2, 9);

}