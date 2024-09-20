
        function funcionarios() {
            let listaFuncionarios = [];
            let continuar = true;

            while (continuar && listaFuncionarios.length < 100) {
                let info = {};

                // Captura o nome
                let nome = prompt("Informe o nome e sobrenome do funcionário:");
                nome = nome.trim();
                while (!validarNome(nome)) {
                    alert("Nome inválido, deve conter nome e sobrenome. Tente novamente.");
                    nome = prompt("Informe o nome e sobrenome do funcionário:");
                    nome = nome.trim();
                }
                info.nome = nome;

                // Captura a idade
                let idade = prompt("Informe a idade do funcionário:");
                while (!validarIdade(idade)) {
                    alert("Idade inválida, deve ser maior que 14 e menor que 120. Tente novamente.");
                    idade = prompt("Informe a idade do funcionário:");
                }
                info.idade = parseInt(idade);

                // Captura o salário
                let salario = prompt("Informe o salário do funcionário:");
                while (!validarSalario(salario)) {
                    alert("Salário inválido, deve ser entre R$ 2000,00 e R$ 20000,00. Tente novamente.");
                    salario = prompt("Informe o salário do funcionário:");
                }
                info.salario = parseFloat(salario);

                // Adiciona o funcionário à lista
                listaFuncionarios.push(info);

                // Pergunta se deseja continuar cadastrando
                if (listaFuncionarios.length < 100) {
                    continuar = confirm("Deseja cadastrar outro funcionário?");
                }
            }

            // Exibe os funcionários cadastrados
            console.log("Funcionários cadastrados:", listaFuncionarios);
        }

        // Função para validar o nome
        function validarNome(nome) {
            return nome.length > 0 && nome.split(" ").length >= 2;
        }

        // Função para validar a idade
        function validarIdade(idade) {
            return !isNaN(idade) && idade > 14 && idade < 120;
        }

        // Função para validar o salário
        function validarSalario(salario) {
            return !isNaN(salario) && salario >= 2000 && salario <= 20000;
        }

        funcionarios();