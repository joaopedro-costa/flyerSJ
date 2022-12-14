let und = document.querySelectorAll('#unidade')[0]
let endereco = document.querySelectorAll('.endereco h3')

var unidade_1 = {numero: 'unidade sj 01', end: 'av. do café', km: 'N. 1202'}
var unidade_2 = {numero: 'unidade sj 02', end: 'rod. anhanguera', km: 'km 345'}
var unidade_3 = {numero: 'unidade sj 03', end: 'r. aurora', km: 'N. 108'}
var unidade_4 = {numero: 'unidade sj 04', end: 'av. do café', km: 'N. 249'}
var unidade_5 = {numero: 'unidade sj 05', end: 'r. tenente catão roxo', km: 'N. 1844'}
var unidade_6 = {numero: 'unidade sj 06', end: 'rod. anhanguera', km: 'km 398'}
var unidade_7 = {numero: 'unidade sj 07', end: 'r. henrique dumont', km: 'N. 1472'}
var unidade_8 = {numero: 'unidade sj 08', end: 'r. martinico prado', km: 'N. 432'}
var unidade_9 = {numero: 'unidade sj 09', end: 'rod. anhanguera', km: 'km 275'}
var unidade_10 = {numero: 'unidade sj 10', end: 'rua petrópolis', km: 'N. 440'}
var unidade_11 = {numero: 'unidade sj 11', end: 'rod. brig. faria lima', km: 'km 326'}
var unidade_12 = {numero: 'unidade sj 12', end: 'rod. brig. faria lima', km: 'km 425'}
var unidade_13 = {numero: 'unidade sj 13', end: 'r. henrique dumont', km: 'N. 1090'}
var unidade_14 = {numero: 'unidade sj 14', end: 'av auxiliar', km: 'N. 187'}
var unidade_15 = {numero: 'unidade sj 15', end: 'rod. sp-253', km: 'km 116'}
var unidade_16 = {numero: 'unidade sj 16', end: 'rod. anhanguera', km: 'km 349'}
var unidade_17 = {numero: 'unidade sj 17', end: 'rod. anhanguera', km: 'km 266'}
var unidade_18 = {numero: 'unidade sj 18', end: 'r. coronel camisão', km: 'N. 975'}
var unidade_19 = {numero: 'unidade sj 19', end: 'av. do café', km: 'N. 293'}
var unidade_20 = {numero: 'unidade sj 20', end: 'r. mogi das cruzes', km: 'N. 62'}
var unidade_21 = {numero: 'unidade sj 21', end: 'rod. sp-255', km: 'km 67'}
var unidade_22 = {numero: 'unidade sj 22', end: '', km: ''}
var unidade_23 = {numero: 'unidade sj 23', end: '', km: ''}
var unidade_24 = {numero: 'unidade sj 24', end: 'rod. br-153', km: 'km 197,2'}

und.value = '1'

und.addEventListener('input', function() {
    if (und.value == '1' || und.value == '01'){
        endereco[1].innerHTML = unidade_1.numero
        endereco[2].innerHTML = unidade_1.end
        endereco[3].innerHTML = unidade_1.km
    }else if(und.value == '2' || und.value == '02'){
        endereco[1].innerHTML = unidade_2.numero
        endereco[2].innerHTML = unidade_2.end
        endereco[3].innerHTML = unidade_2.km
    }else if(und.value == '3' || und.value == '03'){
        endereco[1].innerHTML = unidade_3.numero
        endereco[2].innerHTML = unidade_3.end
        endereco[3].innerHTML = unidade_3.km
    }else if(und.value == '4' || und.value == '04'){
        endereco[1].innerHTML = unidade_4.numero
        endereco[2].innerHTML = unidade_4.end
        endereco[3].innerHTML = unidade_4.km
    }else if(und.value == '5' || und.value == '05'){
        endereco[1].innerHTML = unidade_5.numero
        endereco[2].innerHTML = unidade_5.end
        endereco[3].innerHTML = unidade_5.km
    }else if(und.value == '6' || und.value == '06'){
        endereco[1].innerHTML = unidade_6.numero
        endereco[2].innerHTML = unidade_6.end
        endereco[3].innerHTML = unidade_6.km
    }else if(und.value == '7' || und.value == '07'){
        endereco[1].innerHTML = unidade_7.numero
        endereco[2].innerHTML = unidade_7.end
        endereco[3].innerHTML = unidade_7.km
    }else if(und.value == '8' || und.value == '08'){
        endereco[1].innerHTML = unidade_8.numero
        endereco[2].innerHTML = unidade_8.end
        endereco[3].innerHTML = unidade_8.km
    }else if(und.value == '9' || und.value == '09'){
        endereco[1].innerHTML = unidade_9.numero
        endereco[2].innerHTML = unidade_9.end
        endereco[3].innerHTML = unidade_9.km
    }else if(und.value == '10'){
        endereco[1].innerHTML = unidade_10.numero
        endereco[2].innerHTML = unidade_10.end
        endereco[3].innerHTML = unidade_10.km
    }else if(und.value == '11'){
        endereco[1].innerHTML = unidade_11.numero
        endereco[2].innerHTML = unidade_11.end
        endereco[3].innerHTML = unidade_11.km
    }else if(und.value == '12'){
        endereco[1].innerHTML = unidade_12.numero
        endereco[2].innerHTML = unidade_12.end
        endereco[3].innerHTML = unidade_12.km
    }else if(und.value == '13'){
        endereco[1].innerHTML = unidade_13.numero
        endereco[2].innerHTML = unidade_13.end
        endereco[3].innerHTML = unidade_13.km
    }else if(und.value == '14'){
        endereco[1].innerHTML = unidade_14.numero
        endereco[2].innerHTML = unidade_14.end
        endereco[3].innerHTML = unidade_14.km
    }else if(und.value == '15'){
        endereco[1].innerHTML = unidade_15.numero
        endereco[2].innerHTML = unidade_15.end
        endereco[3].innerHTML = unidade_15.km
    }else if(und.value == '16'){
        endereco[1].innerHTML = unidade_16.numero
        endereco[2].innerHTML = unidade_16.end
        endereco[3].innerHTML = unidade_16.km
    }else if(und.value == '17'){
        endereco[1].innerHTML = unidade_17.numero
        endereco[2].innerHTML = unidade_17.end
        endereco[3].innerHTML = unidade_17.km
    }else if(und.value == '18'){
        endereco[1].innerHTML = unidade_18.numero
        endereco[2].innerHTML = unidade_18.end
        endereco[3].innerHTML = unidade_18.km
    }else if(und.value == '19'){
        endereco[1].innerHTML = unidade_19.numero
        endereco[2].innerHTML = unidade_19.end
        endereco[3].innerHTML = unidade_19.km
    }else if(und.value == '20'){
        endereco[1].innerHTML = unidade_20.numero
        endereco[2].innerHTML = unidade_20.end
        endereco[3].innerHTML = unidade_20.km
    }else if(und.value == '21'){
        endereco[1].innerHTML = unidade_21.numero
        endereco[2].innerHTML = unidade_21.end
        endereco[3].innerHTML = unidade_21.km
    }else if(und.value == '22'){
        endereco[1].innerHTML = unidade_22.numero
        endereco[2].innerHTML = unidade_22.end
        endereco[3].innerHTML = unidade_22.km
    }else if(und.value == '23'){
        endereco[1].innerHTML = unidade_23.numero
        endereco[2].innerHTML = unidade_23.end
        endereco[3].innerHTML = unidade_23.km
    }else if(und.value == '24'){
        endereco[1].innerHTML = unidade_24.numero
        endereco[2].innerHTML = unidade_24.end
        endereco[3].innerHTML = unidade_24.km
    }
})