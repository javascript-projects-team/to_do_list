
//iput에 값을 입력하고, plusbutton 누를때 List에 추가
function plusButton(event) {

    console.log("eenvnn",event);
    const inputBox = document.querySelector("#input-box");
    const inputBoxValue = inputBox.value;
    console.log("eenvnn11",inputBoxValue);
    document.querySelector(".to-do-list").innerHTML += `
        <li>
        <input
            type="checkbox"
            class="checkbox"
        >
        </input>
        <span>${inputBoxValue}</span>
        <img
            src="./asset/trash.png"
            width="20"
            height="20"
            alt="my image"
        
        >
        </img>
        </li>
    `
    inputBoxValue.value="";
}

  //체크박스 체크 시 밑줄
  function checkedDelete(checkboxElem) {
    const checkbox = document.querySelector(".checkbox");
    // const checkbox = checkboxElem?.parentElement;
    const selectSpan = document.querySelector("span");

    checkbox.addEventListener("change", () => {
        if(checkbox.checked === true) {
        selectSpan.style.textDecoration = "line-through";
        } else {
            selectSpan.style.textDecoration  =""
        }

    })

  }

