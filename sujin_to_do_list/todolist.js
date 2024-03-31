let a = 1;

function completeList() {
  console.log(' check your box');
}

function addList() {
  console.log(' click your button');
  a++;

  let chk = document.createElement('input');
  chk.setAttribute('type', 'checkbox');
  chk.addEventListener('onclick', completeList());

  let input = document.createElement('input');
  input.setAttribute('placeholder', '일정을 입력하세요');

  let liTag = document.createElement('li');
  liTag.setAttribute('class', 'main_li_list');
  liTag.appendChild(chk);
  liTag.appendChild(input);
  document.getElementById('main_ul').appendChild(liTag);
}
