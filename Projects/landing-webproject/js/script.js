//import { CountUp } from './countUp.umd'

document.addEventListener("DOMContentLoaded", function () {
  // For mobile menu
  let burger = document.querySelector('.burger')
  let mobileMenu = document.querySelector('.mobile-menu__nav')
  burger.onclick = function () {
      if(burger.classList.contains('active')){
          burger.classList.remove('active')
          mobileMenu.classList.remove('active')
      } else{
          burger.classList.add('active')
          mobileMenu.classList.add('active')
      }
  }

  document.querySelector('.service-head').addEventListener('click', animateNumbers)
  function animateNumbers() {
      let demo = new CountUp('counter', 12357)
      if (!demo.error) {
          demo.start()
      }else{
          console.error(demo.error)
      }
  }
})
