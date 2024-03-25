    # language: pt

Funcionalidade: Registro no site nopCommerce

    Cenário: Registro bem-sucedido de um novo usuário
        Dado que eu esteja na página de registro do nopCommerce
        Quando eu preencho o formulário de registro com dados válidos
            E eu seleciono a data correta correspondente ao input
                Então eu devo ser registrado com sucesso

    Cenário: Apresentar mensagens de erro para campos obrigatórios não preenchidos
        Dado que eu esteja na página de registro
        Quando eu submeto o formulário de registro sem preencher os campos obrigatórios
            Então mensagens de erro devem ser exibidas para cada campo obrigatório