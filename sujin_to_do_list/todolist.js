const delButtonClickEvent = () => {
  alert(`delete button event,dddfdfdd`);
};

const addButtonClickEvent = () => {
  const list = document.getElementById(`to_do_list`);
  const radioInput = document.createElement(`input`);
  radioInput.setAttribute(`type`, `radio`);
  list.append(radioInput);
  const textInput = document.createElement(`input`);
  textInput.setAttribute(`type`, ``);
  textInput.setAttribute(`class`, `text_area`);
  list.append(textInput);
  const delBtn = document.createElement(`button`);
  delBtn.append(`삭제`);
  delBtn.setAttribute(`class`, `del_btn`);
  delBtn.setAttribute(`onclick`, `delButtonClickEvent()`);
  list.append(delBtn);
  list.append(document.createElement(`br`));
};
