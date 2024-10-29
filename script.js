let x = document.getElementById('num1').value;
let y = document.getElementById('num2').value;
let escolha = document.getElementById('opc').value;

function calc(){
switch(escolha) {
    case 1:
        let i = x + y;
        document.getElementById('resul').innerHTML = i;
        break;
    case 2:
        let u = x - y;
        document.getElementById('resul').innerHTML = u;
        break;
    case 3:
        let l = x * y;
        document.getElementById('resul').innerHTML = l;
        break;
    case 4:
        let o = x / y;
        document.getElementById('resul').innerHTML = o;
        break;
    default:
        document.getElementById('resul').innerHTML = 'Operaçãp inválida, escolha umas das(+, -, *, /)!';             
        break;
}}