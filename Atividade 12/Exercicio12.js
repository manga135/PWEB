function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    get nomeCorrentista() { return this._nomeCorrentista; }
    get banco() { return this._banco; }
    get numeroConta() { return this._numeroConta; }
    get saldo() { return this._saldo; }
    set nomeCorrentista(nome) { this._nomeCorrentista = nome; }
    set banco(banco) { this._banco = banco; }
    set numeroConta(numero) { this._numeroConta = numero; }
    set saldo(saldo) { if (saldo >= 0) this._saldo = saldo; }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }
    get juros() { return this._juros; }
    get dataVencimento() { return this._dataVencimento; }
    set juros(valor) { this._juros = valor; }
    set dataVencimento(data) { this._dataVencimento = data; }
}

document.getElementById('btnRetangulo').addEventListener('click', function() {
    // Entrada via prompt
    let base = parseFloat(prompt("Digite a base do retângulo:"));
    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultadoRetangulo').innerHTML = "<p style='color:red'>Valores inválidos!</p>";
        return;
    }
    
    const ret = new Retangulo(base, altura);
    const area = ret.calcularArea();
    document.getElementById('resultadoRetangulo').innerHTML = `
        <p>Base: ${base} m</p>
        <p>Altura: ${altura} m</p>
        <p><strong>Área calculada: ${area} m²</strong></p>
    `;
});

document.getElementById('btnContas').addEventListener('click', function() {
    const ccNome = document.getElementById('ccNome').value;
    const ccBanco = document.getElementById('ccBanco').value;
    const ccNumero = document.getElementById('ccNumero').value;
    const ccSaldo = parseFloat(document.getElementById('ccSaldo').value);
    const ccSaldoEsp = parseFloat(document.getElementById('ccSaldoEspecial').value);
    
    const cpNome = document.getElementById('cpNome').value;
    const cpBanco = document.getElementById('cpBanco').value;
    const cpNumero = document.getElementById('cpNumero').value;
    const cpSaldo = parseFloat(document.getElementById('cpSaldo').value);
    const cpJuros = parseFloat(document.getElementById('cpJuros').value);
    const cpDataVenc = document.getElementById('cpDataVenc').value;
    
    const corrente = new Corrente(ccNome, ccBanco, ccNumero, ccSaldo, ccSaldoEsp);
    const poupanca = new Poupanca(cpNome, cpBanco, cpNumero, cpSaldo, cpJuros, cpDataVenc);
    
    document.getElementById('resultadoContas').innerHTML = `
        <h4>Conta Corrente</h4>
        <p>Correntista: ${corrente.nomeCorrentista}</p>
        <p>Banco: ${corrente.banco}</p>
        <p>Número da conta: ${corrente.numeroConta}</p>
        <p>Saldo: R$ ${corrente.saldo.toFixed(2)}</p>
        <p>Saldo especial: R$ ${corrente.saldoEspecial.toFixed(2)}</p>
        
        <h4>Conta Poupança</h4>
        <p>Correntista: ${poupanca.nomeCorrentista}</p>
        <p>Banco: ${poupanca.banco}</p>
        <p>Número da conta: ${poupanca.numeroConta}</p>
        <p>Saldo: R$ ${poupanca.saldo.toFixed(2)}</p>
        <p>Juros: ${poupanca.juros}% ao mês</p>
        <p>Data de vencimento: ${poupanca.dataVencimento}</p>
    `;
});