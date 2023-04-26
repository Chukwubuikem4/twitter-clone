// messages
const btn = document.getElementById('message-expand')
const nav = document.getElementById('msg')
function navToggle () {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}
btn.addEventListener('click', navToggle)


// navigation
const span = document.getElementById('user-menu')
const aside = document.getElementById('menu')
function nToggle (){
  span.classList.toggle('open')
  aside.classList.toggle('hidden')
}
btn.addEventListener('click', nToggle)