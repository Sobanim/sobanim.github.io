// For menu-submenu
// If mobile
let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i) },
    BlackBerry: function () { return navigator.userAgent.match(/Blackberry/i) },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())}
}
let body = document.querySelector('body')

if(isMobile.any()){
    body.classList.add('touch')

    let arrow = document.querySelector('.arrow')
} else{
    body.classList.add('mouse')
}
