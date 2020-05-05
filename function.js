//------funcoes------//

function soma(opA, opB){
    var total = opA + opB;
    return total;
}

function Ola(nome){
    console.log("Ola, " + nome);
}

var opC = soma(1, 3);
var opD = soma(50, 50);
var opE = soma(opC, opD);
console.log(opC);
console.log(opD);
console.log(opE);

Ola("Damaris");