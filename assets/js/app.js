let open_bar = document.querySelector('.open_bar');
let mobil_list = document.querySelector('.listMobil');

open_bar.addEventListener('click', () => {
  open_bar.classList.toggle('bx-x')
  mobil_list.classList.toggle('active')
  Body.classList.toggle('active')
})

let Body = document.querySelector('#body');
