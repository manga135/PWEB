class Pessoa {
    constructor(altura, peso) {
        this.altura = altura;
        this.peso = peso;
    }

     getAltura () {
        return this.altura;
    }

    getPeso () {
        return this.peso;
    }
}

a = prompt("Digite a altura da pessoa (#.##) em metros :");
p = prompt("Digite o peso da pessoa em kg:");


const pessoa = new Pessoa(a, p);

function calcularIMC(pessoa) {
   
    const imc = pessoa.getPeso() / (pessoa.getAltura() * pessoa.getAltura());
    return imc;
}

const imc = calcularIMC(pessoa);

function imprimeResultado(imc) {
    if (imc < 18.5) {
        alert("Classificação: Magreza. \nGrau de Obesidade: 0");
    } else if (imc >= 18.5 && imc < 25) {
        alert("Classificação: Peso Normal. \nGrau de Obesidade: 0");
    } else if (imc >= 25 && imc < 30) {
        alert("Classificação: Sobrepeso. \nGrau de Obesidade: 1");
    } else if (imc >= 30 && imc < 40) {
        alert("Classificação: Obesidade. \nGrau de Obesidade: 2");
    }
    else {
        alert("Classificação: Obesidade Grave. \nGrau de Obesidade: 3");
    }
}
imprimeResultado(imc);