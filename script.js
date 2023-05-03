// messages
const btn = document.getElementById('message-expand')
const nav = document.getElementById('msg')
function navToggle () {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}
btn.addEventListener('click', navToggle)