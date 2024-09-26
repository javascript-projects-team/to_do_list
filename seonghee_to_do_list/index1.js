
// //input에 값을 입력하고, plusbutton 누를때 List에 추가
// function plusButton(event) {

//     const inputBox = document.querySelector("#input-box");
//     const inputBoxValue = inputBox.value;
//     document.querySelector(".to-do-list").innerHTML += `
//         <li>
//         <input
//             type="checkbox"
//             class="checkbox"
//         >
//         </input>
//         <span>${inputBoxValue}</span>
//         <img
//             src="./asset/trash.png"
//             width="20"
//             height="20"
//             alt="my image"
        
//         >
//         </img>
//         </li>
//     `
//     inputBoxValue.value="";
//     document.querySelector(".to-do-list").append(inputBoxValue)
    


// }

//   //체크박스 체크 시 밑줄
//   function checkedDelete(checkboxElem) {
//       const liElem = checkboxElem.parentElement;
//       const spanElem = liElem.querySelector("span");

//     // const checkbox = document.querySelector(".checkbox");
//     // const selectSpan = document.querySelector("span");
//     if (checkboxElem.checked) {
//         spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
//       } else {
//         spanElem.innerHTML = `${spanElem.innerText}`;
//       }
//     // checkbox.addEventListener("change", () => {
//     //     if(checkbox.checked === true) {
//     //     selectSpan.style.textDecoration = "line-through";
//     //     } else {
//     //         selectSpan.style.textDecoration  =""
//     //     }
//     // })
//   }

// //휴지통 버튼 클릭 시 list 제거
// function removeList(removeElem) {
//     removeElem.parentElement.remove();
// }