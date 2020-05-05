class Matematica {
    
    soma(a1, a2){
        return a1 + a2;
    }
    subtracao(a1, a2){
        return a1 - a2;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(1, 2);

console.log(resultado)