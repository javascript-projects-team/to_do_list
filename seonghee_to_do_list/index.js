// 할 일을 추가하는 함수
function addTask() {
    // 입력 상자의 값을 가져오기
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();
  
    // 값이 비어있는지 확인하고, 비어있지 않은 경우에만 추가
    if (taskText) {
      const todoList = document.getElementById("to-do-list");
  
      // 새로운 목록 아이템 생성
      const newListItem = document.createElement("li");
  
      // 체크박스 생성
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.onclick = function () {
        toggleStrikethrough(this);
      };
  
      // 할 일 내용 생성
      const span = document.createElement("span");
      span.textContent = taskText;
  
      // 삭제 아이콘 생성
      const deleteIcon = document.createElement("img");
      deleteIcon.src = "./asset/trash.png";
      deleteIcon.width = 20;
      deleteIcon.height = 20;
      deleteIcon.alt = "삭제 아이콘";
      deleteIcon.onclick = function () {
        removeList(this);
      };
  
      // 요소들을 `li`에 추가
      newListItem.appendChild(checkbox);
      newListItem.appendChild(span);
      newListItem.appendChild(deleteIcon);
  
      // 목록에 `li` 추가
      todoList.appendChild(newListItem);
  
      // 입력 상자 초기화
      inputBox.value = "";
    }
  }
  
  // 삭제를 위한 함수
  function removeList(element) {
    const listItem = element.parentElement;
    listItem.parentElement.removeChild(listItem);
  }
  
function toggleStrikethrough(element) {
    const listItem = element.parentElement;
    const span = listItem.querySelector("span");
  
    if (element.checked) {
      span.classList.add("strikethrough");
    } else {
      span.classList.remove("strikethrough");
    }
  }