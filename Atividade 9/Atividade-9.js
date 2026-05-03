const button = document.getElementById("Maior");

function encontrarMaior(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    if (c > a && c > b) return c;
    return null;
}

button.addEventListener("click", function() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));
    
    const maior = encontrarMaior(num1, num2, num3);
    
    if (maior !== null) {
        alert("O maior número é: " + maior);
    } else {
        alert("Os números são iguais.");
    }
});

const button2 = document.getElementById("Crescente");

function ordenarCrescente(a, b, c) {
    const numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros;
}

button2.addEventListener("click", function() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));

    const numerosOrdenados = ordenarCrescente(num1, num2, num3);

    alert("Números em ordem crescente: " + numerosOrdenados.join(", "));
});

const button3 = document.getElementById("Palindromo");

function verificarPalindromo(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

button3.addEventListener("click", function() {
    const inputStr = prompt("Digite uma palavra ou frase:");
    if (verificarPalindromo(inputStr)) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
});

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2 || palavra1 === "" || palavra2 === "") {
        return "erro";
    }
    
    if (palavra1.toLowerCase().includes(palavra2.toLowerCase())) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

const button4 = document.getElementById("Subconjunto");

button4.addEventListener("click", function() {
    const palavra1 = prompt("Digite a primeira palavra:");
    const palavra2 = prompt("Digite a segunda palavra:");
    const resultado = verificarSubconjunto(palavra1, palavra2);
    alert(resultado);
});

function diaDaSemana(data) {
    if (!data || !data.includes('/')) {
        return "Formato inválido. Use DD/MM/AAAA";
    }
    
    const [dia, mes, ano] = data.split('/');
    
    const dataObj = new Date(ano, mes - 1, dia, 12, 0, 0);
    
    if (isNaN(dataObj.getTime())) {
        return "Data inválida";
    }
    
    return dataObj.toLocaleDateString('pt-BR', { weekday: 'long' });
}

const button5 = document.getElementById("Dia");

button5.addEventListener("click", function() {
    const dataInformada = prompt("Digite uma data (DD/MM/AAAA):");
    if (dataInformada) {
        const resultado = diaDaSemana(dataInformada);
        alert("O dia da semana é: " + resultado);
    }
});