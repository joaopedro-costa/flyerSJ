/*----------------- S10 -----------------*/

let s10 = document.getElementById('s10')
let s10check = document.querySelectorAll(".jspreco input")[0]
let containerS10 = document.querySelectorAll('.s10')[0]
let precoS10 = document.querySelectorAll('.s10 .preco')

containerS10.classList.add('none')

s10.addEventListener('input', function() {
    document.querySelectorAll('.preco')[0].innerHTML = s10.value + "/litro"

    if(s10.value){
        s10check.checked = true
        containerS10.classList.remove('none')
    }else{
        s10check.checked = false
        containerS10.classList.add('none')
    }
})

/*----------------- S500 -----------------*/

let s500 = document.getElementById('s500')
let s500check = document.querySelectorAll(".jspreco input")[2]
let containerS500 = document.querySelectorAll('.s500')[0]
let precoS500 = document.querySelectorAll('.s500 .preco')

containerS500.classList.add('none')

s500.addEventListener('input', function() {
    document.querySelectorAll('.preco')[1].innerHTML = s500.value + "/litro"

    if(s500.value){
        s500check.checked = true
        containerS500.classList.remove('none')
    }else{
        s500check.checked = false
        containerS500.classList.add('none')
    }
})

/*----------------- ETANOL -----------------*/

let etanol = document.getElementById('etanol')
let etanolcheck = document.querySelectorAll(".jspreco input")[4]
let containeretanol = document.querySelectorAll('.etanol')[0]
let precoetanol = document.querySelectorAll('.etanol .preco')

containeretanol.classList.add('none')

etanol.addEventListener('input', function() {
    document.querySelectorAll('.preco')[2].innerHTML = etanol.value + "/litro"

    if(etanol.value){
        etanolcheck.checked = true
        containeretanol.classList.remove('none')
    }else{
        etanolcheck.checked = false
        containeretanol.classList.add('none')
    }
})

/*----------------- ARLA -----------------*/

let arla = document.getElementById('arla')
let arlacheck = document.querySelectorAll(".jspreco input")[6]
let containerarla = document.querySelectorAll('.arla')[0]
let precoarla = document.querySelectorAll('.arla .preco')

containerarla.classList.add('none')

arla.addEventListener('input', function() {
    document.querySelectorAll('.preco')[3].innerHTML = arla.value + "/litro"

    if(arla.value){
        arlacheck.checked = true
        containerarla.classList.remove('none')
    }else{
        arlacheck.checked = false
        containerarla.classList.add('none')
    }
})

/*----------------- ARLA -----------------*/

let gasolina = document.getElementById('gasolina')
let gasolinacheck = document.querySelectorAll(".jspreco input")[8]
let containergasolina = document.querySelectorAll('.gasolina')[0]
let precogasolina = document.querySelectorAll('.gasolina .preco')

containergasolina.classList.add('none')

gasolina.addEventListener('input', function() {
    document.querySelectorAll('.preco')[4].innerHTML = gasolina.value + "/litro"

    if(gasolina.value){
        gasolinacheck.checked = true
        containergasolina.classList.remove('none')
    }else{
        gasolinacheck.checked = false
        containergasolina.classList.add('none')
    }
})

/*----------------- ADITIVADA -----------------*/

let aditivada = document.getElementById('aditivada')
let aditivadacheck = document.querySelectorAll(".jspreco input")[10]
let containeraditivada = document.querySelectorAll('.aditivada')[0]
let precoaditivada = document.querySelectorAll('.aditivada .preco')

containeraditivada.classList.add('none')

aditivada.addEventListener('input', function() {
    document.querySelectorAll('.preco')[5].innerHTML = aditivada.value + "/litro"

    if(aditivada.value){
        aditivadacheck.checked = true
        containeraditivada.classList.remove('none')
    }else{
        aditivadacheck.checked = false
        containeraditivada.classList.add('none')
    }
})

/*---------------- BOTÕES ----------------*/

function reset() {
    s10.value = ''
    s500.value = ''
    etanol.value = ''
    arla.value = ''
    gasolina.value = ''
    aditivada.value = ''
    containerS10.classList.add('none')
    containerS500.classList.add('none')
    containerarla.classList.add('none')
    containeretanol.classList.add('none')
    containergasolina.classList.add('none')
    containeraditivada.classList.add('none')
}

let hamburguer = document.getElementById('hamburguer')
let menu = document.querySelectorAll('.hamburguerMenu')[0]

// menu.style.display = "none"

hamburguer.addEventListener('click', function() {
    document.querySelectorAll('.icon')[0].classList.toggle('ativar')
    document.querySelectorAll('.hamburguerMenu')[0].classList.toggle('hamburguerATIVO')
})

window.alert('teste')