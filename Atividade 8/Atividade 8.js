
        const pessoas = [];
        let totalPessoas = 45;
        
        let somaIdades = 0;
        let maiorIdade = null; 
        let menorIdade = null;
        let qtdPessimo = 0;
        let qtdOtimoBom = 0;
        let qtdMulheres = 0, qtdHomens = 0, qtdOutros = 0;

        for (let i = 0; i < 45; i++) {
            let idade, sexo, avaliacao;

            do {
                idade = parseInt(prompt(`Pessoa ${i+1}: Idade:`));
            } while (isNaN(idade));

            do {
                sexo = prompt(`Pessoa ${i+1}: Sexo (M/F/O):`).toUpperCase();
            } while (sexo !== "M" && sexo !== "F" && sexo !== "O");

            do {
                avaliacao = parseInt(prompt(`Pessoa ${i+1}: Avaliação (4-Ótimo, 3-Bom, 2-Regular, 1-Péssimo):`));
            } while (isNaN(avaliacao) || avaliacao < 1 || avaliacao > 4);

            pessoas.push({ idade, sexo, avaliacao });

            somaIdades += idade;

            if (maiorIdade === null || idade > maiorIdade) {
                maiorIdade = idade;
            }

            if (menorIdade === null || idade < menorIdade) {
                menorIdade = idade;
            }

            if (avaliacao === 1) qtdPessimo++;
            if (avaliacao === 4 || avaliacao === 3) qtdOtimoBom++;

            if (sexo === 'F') qtdMulheres++;
            else if (sexo === 'M') qtdHomens++;
            else if (sexo === 'O') qtdOutros++;
        }

        let mediaIdade = somaIdades / totalPessoas;
        let porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

        let mensagem = "Relatório da pesquisa\n";
        mensagem += `Total de respondentes: ${totalPessoas}\n`;
        mensagem += `Média das idades: ${mediaIdade} anos\n`;
        mensagem += `Idade da pessoa mais velha: ${maiorIdade} anos\n`;
        mensagem += `Idade da pessoa mais nova: ${menorIdade} anos\n`;
        mensagem += `Quantidade de pessoas que responderam PÉSSIMO: ${qtdPessimo}\n`;
        mensagem += `Porcentagem de pessoas que responderam ÓTIMO ou BOM: ${porcentagemOtimoBom}%\n`;
        mensagem += `--- Distribuição por sexo ---\n`;
        mensagem += `Mulheres (F): ${qtdMulheres}\n`;
        mensagem += `Homens (M): ${qtdHomens}\n`;
        mensagem += `Outros (O): ${qtdOutros}`;

        alert(mensagem);
