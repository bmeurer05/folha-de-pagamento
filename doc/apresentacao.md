# Folha de pagamento
> Este documento serve como resumo a ser apresentado explicando de forma geral o funcionamento e o controle de qualidade do software a ser desenvolvido.

O documento completo da documentação pode ser encontrado em `folha-de-pagamento/doc/requisitos.md`

## Escopo do projeto
O projeto contempla o desenvolvimento do sistema de folha de pagamento destinado ao gerenciamento de colaboradores e ao cálculo de suas respectivas remunerações. Além do desenvolvimento do sistema, o projeto abrangerá atividades relacionadas à garantia da qualidade de software.

## Requisitos principais

### Funcionais

| **ID** | **Nome do Requisito** | **Descrição** |
|--------|-----------------------|---------------|
| **RF001** | Cadastro de Colaborador | O sistema deverá permitir o cadastro de colaboradores contendo: matrícula, nome, salário base e tipo de colaborador. |
| **RF005** | Cadastro de Colaborador Comissionado | O sistema deverá permitir informar: valor das vendas e percentual de comissão para o cálculo posterior da remuneração. Caso o percentual não seja informado, será o valor definido na (RN009). |
| **RF006** | Cadastro de Colaborador por Produção | O sistema deverá permitir informar: quantidade produzida e valor pago por unidade produzida para cálculo posterior da remuneração. |
| **RF011** | Cálculo de Salário | O sistema deverá apresentar automaticamente o salário final de cada colaborador de acordo com sua categoria de remuneração. |
| **RF013** | Geração de Folha de Pagamento | O sistema deverá gerar uma folha contendo: matrícula, nome, tipo de colaborador e valor do salário final. |
| **RF014** | Emissão individual e consolidada | O sistema deverá emitir uma folha individual contendo os dados e a remuneração de um colaborador selecionado, ou uma folha consolidada contendo todos os colaboradores e o valor total das remunerações. |

### Não Funcionais

| **ID** | **Nome do Requisito** | **Descrição** |
|--------|-----------------------|---------------|
| **RNF002** | Validação de Dados | O sistema deverá validar os dados de entrada antes de efetuar qualquer cálculo ou salvar cadastros e alterações. |
| **RNF003** | Persistência de Dados | O sistema deverá armazenar os registros dos colaboradores de forma persistente. |
| **RNF006** | Confiabilidade dos Cálculos | O sistema deverá produzir resultados consistentes para os cálculos de remuneração, considerando os dados cadastrados e as regras de negócio definidas. |
| **RNF007** | Integridade dos Dados | O sistema deverá preservar a consistência dos dados armazenados durante operações de cadastro, alteração e exclusão de colaboradores. |
| **RNF010** | Acesso ao Sistema | O acesso às funcionalidades administrativas deverá ser permitido somente após autenticação válida. |

### Regras de negócio

| **ID** | **Nome da Regra** | **Descrição** |
|--------|-------------------|---------------|
| **RN001** | Matrícula Única | Cada colaborador deverá possuir uma matrícula única dentro do sistema. |
| **RN003** | Salário Base Válido | O salário base do colaborador não poderá possuir valor negativo. |
| **RN008** | Cálculo Automático do Salário | O salário final deverá ser calculado automaticamente pelo sistema de acordo com a categoria do colaborador. |
| **RN009** | Comissão Padrão | Quando o administrador não informar o percentual de comissão no cadastro, o sistema deverá atribuir o percentual padrão de 5%. |
| **RN010** | Remuneração Padrão | A remuneração será igual ao salário base. |
| **RN011** | Remuneração Comissionada | A remuneração será igual ao salário base acrescido do valor das vendas multiplicado pelo percentual de comissão dividido por 100. Fórmula: `SalárioBase + (ValorVenda × Comissão / 100)`. |
| **RN012** | Remuneração por Produção | A remuneração será igual ao salário base acrescido da quantidade produzida multiplicada pelo valor pago por unidade. Fórmula: `SalárioBase + (Quantidade × ValorUnidade)`. |

## Arquitetura

O sistema será baseado em uma arquitetura em camadas. Esse modelo foi escolhido com o objetivo de organizar as responsabilidades do sistema, facilitando:

- Implementação;

- Manutenção;

- Realização de testes.


![Arquitetura em camadas](plantUML/arq-diagram.png)

## Plano de Garantia de Qualidade

### Controle de versões

- Serão mantidas em um repositório no Github;

- Branch main representará a versão estável do projeto;

- Cada funcionalidade será desenvolvida em uma branch própria.

### Métricas adotadas

| Métrica | Cálculo ou registro | Meta proposta |
|:--------|:--------------------|:--------------|
| Cobertura dos requisitos funcionais por testes | RF com ao menos um caso associado / 16 * 100 | 100% |
| Execução dos testes planejados | Casos executados / casos planejados * 100 | 100% |
| Taxa de aprovação dos testes | Casos aprovados / casos executados * 100 | 100% |
| Tempo de resposta | Tempo entre o envio da operação e recebimento da resposta completa | Até 2 segundos em pelo menos 29 de 30 medições de cada operação |

### Critérios de aprovação
A versão será considerada aprovada quando:

- Todos os requisitos funcionais previstos estiverem implementados e vinculados aos testes.

- Todos os casos obrigatórios estiverem executados e aprovados.

- Os cálculos das três categorias e o total consolidado corresponderem aos resultados esperados.

- Não existirem defeitos críticos em aberto.

- Os critérios de qualidade e as metas acordadas estiverem atendidas.

## Plano de Testes

### Estratégia

- Testes realizados de forma incremental;

- Funções de cálculo serão verificadas por testes unitários;

- A comunicação entre API, serviços e banco será avaliada por testes de integração.

### Ferramentas

- JUnit e Mockito: Testes unitários e de integração do backend;

- Bruno: Verificação de requisições e respostas da API;

- Chrome e Firefox, com ferramentas de desenvolvedor: Testes manuais, inspeção de falhas e medições.

### Casos de teste

### Exemplos de Casos de Teste

| **ID** | **Caso de Teste** | **Procedimento** | **Resultado Esperado** |
|--------|-------------------|------------------|------------------------|
| **CT005** | Cálculo de Comissão | Cadastrar colaborador com salário base de R$ 2.000, vendas de R$ 10.000 e comissão de 10%. | Salário final de R$ 3.000,00. |
| **CT007** | Matrícula Duplicada | Tentar cadastrar um colaborador com matrícula já existente. | Cadastro rejeitado e registro original preservado. |
| **CT014** | Comissão Padrão | Cadastrar colaborador com salário base de R$ 2.000 e vendas de R$ 10.000, sem informar comissão. | Aplicação automática de 5% e salário final de R$ 2.500,00. |
| **CT032** | Tempo de Resposta | Realizar 30 medições de cadastro, consulta e cálculo. | Pelo menos 29 das 30 medições de cada operação em até 2 segundos. |
