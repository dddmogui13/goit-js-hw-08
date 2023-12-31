import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function handleInput(event) {
  const { email, message } = form.elements;
  const dataObj = {
    email: email.value,
    message: message.value,
  };
  setData(dataObj);
}

function setData(dataObj) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataObj));
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = form.elements;

  if (email.value.trim() !== '' && message.value.trim() !== '') {
    const dataObj = {
      email: email.value,
      message: message.value,
    };
    console.log(dataObj);
    form.reset();
    localStorage.removeItem(LOCAL_KEY);
  } else {
    alert('Будь ласка, заповніть усі поля форми.');
  }
}

function restoreFormData() {
  const storedData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (storedData) {
    const { email, message } = form.elements;
    email.value = storedData.email;
    message.value = storedData.message;
  }
}

function begin() {
  form.addEventListener('input', throttle(handleInput, 500));
  form.addEventListener('submit', handleSubmit);
  restoreFormData();
}

window.onload = begin;