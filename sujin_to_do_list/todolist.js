const list = document.getElementById(`to_do_list`);

let i = 1;

const listSaveButtonClickEvent = (clickItem) => {
  if (document.getElementById(`${clickItem}_save_button`) !== null) {
    document.getElementById(`${clickItem}_save_button`).remove();
  }
  if (document.getElementById(`${clickItem}_del_button`) !== null) {
    document.getElementById(`${clickItem}_del_button`).remove();
  }

  const modifyBtn = document.createElement(`button`);
  const deleteBtn = document.createElement('button');
  const brTag = document.createElement(`br`);

  const clickInput = document.getElementById(`${clickItem}_text_input`);
  clickInput.setAttribute('disabled', '');
  if (document.getElementById(`${clickItem}_br`) !== null) {
    document.getElementById(`${clickItem}_br`).remove();
  }

  modifyBtn.setAttribute('id', `${clickItem}_modify_button`);
  modifyBtn.setAttribute(`class`, `modify_btn button_public`);
  modifyBtn.setAttribute(
    'onclick',
    `listModifyButtonClickEvent("${clickItem}")`
  );
  modifyBtn.textContent = '수정';
  list.append(modifyBtn);

  deleteBtn.setAttribute('id', `${clickItem}_del_button`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${clickItem}")`);
  deleteBtn.textContent = '삭제';
  list.append(deleteBtn);

  brTag.setAttribute('id', `${clickItem}_br`);
  list.append(brTag);
};

const listModifyButtonClickEvent = (clickItem) => {
  if (document.getElementById(`${clickItem}_save_button`) !== null) {
    document.getElementById(`${clickItem}_save_button`).remove();
  }
  if (document.getElementById(`${clickItem}_modify_button`) !== null) {
    document.getElementById(`${clickItem}_modify_button`).remove();
  }
  if (document.getElementById(`${clickItem}_del_button`) !== null) {
    document.getElementById(`${clickItem}_del_button`).remove();
  }

  const saveBtn = document.createElement(`button`);
  const deleteBtn = document.createElement('button');
  const brTag = document.createElement(`br`);

  const clickInput = document.getElementById(`${clickItem}_text_input`);
  clickInput.removeAttribute('disabled');

  document.getElementById(`${clickItem}_br`).remove();

  saveBtn.setAttribute('id', `${clickItem}_save_button`);
  saveBtn.setAttribute(`class`, `save_btn button_public`);
  saveBtn.setAttribute(`onclick`, `listSaveButtonClickEvent("${clickItem}")`);
  saveBtn.textContent = '저장';
  list.append(saveBtn);

  deleteBtn.setAttribute('id', `${clickItem}_del_button`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${clickItem}")`);
  deleteBtn.textContent = '삭제';
  list.append(deleteBtn);

  brTag.setAttribute('id', `${clickItem}_br`);
  list.append(brTag);
};

const delButtonClickEvent = (itemNum) => {
  if (document.getElementById(`${itemNum}_radio`) !== null) {
    document.getElementById(`${itemNum}_radio`).remove();
  }
  if (document.getElementById(`${itemNum}_text_input`) !== null) {
    document.getElementById(`${itemNum}_text_input`).remove();
  }
  if (document.getElementById(`${itemNum}_save_button`) !== null) {
    document.getElementById(`${itemNum}_save_button`).remove();
  }
  if (document.getElementById(`${itemNum}_modify_button`) !== null) {
    document.getElementById(`${itemNum}_modify_button`).remove();
  }
  if (document.getElementById(`${itemNum}_br`) !== null) {
    document.getElementById(`${itemNum}_br`).remove();
  }
  if (document.getElementById(`${itemNum}_del_button`) !== null) {
    document.getElementById(`${itemNum}_del_button`).remove();
  }
};

const addButtonClickEvent = () => {
  const saveBtn = document.createElement(`button`);
  const deleteBtn = document.createElement('button');
  const brTag = document.createElement(`br`);

  let saveBtnItemId = i + '_save_button';
  let deleteBtnItemId = i + '_del_button';

  const radioInput = document.createElement(`input`);
  radioInput.setAttribute(`type`, `radio`);
  radioInput.setAttribute(`id`, `${i}_radio`);
  list.append(radioInput);

  const textInput = document.createElement(`input`);
  textInput.setAttribute(`type`, ``);
  textInput.setAttribute(`class`, `text_area`);
  textInput.setAttribute('id', `${i}_text_input`);
  list.append(textInput);

  saveBtn.setAttribute('id', `${saveBtnItemId}`);
  saveBtn.setAttribute(`class`, `save_btn button_public`);
  saveBtn.setAttribute(`onclick`, `listSaveButtonClickEvent("${i}")`);
  saveBtn.textContent = '저장';
  list.append(saveBtn);

  deleteBtn.setAttribute('id', `${deleteBtnItemId}`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.textContent = '삭제';
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${i}")`);
  list.append(deleteBtn);

  brTag.setAttribute('id', `${i}_br`);
  list.append(brTag);

  i++;
};
