const buttonLog = document.getElementById('toggleLog');
const header = document.querySelector('header');

buttonLog.addEventListener('click', ()=>{
  header.classList.toggle('logged');
})
