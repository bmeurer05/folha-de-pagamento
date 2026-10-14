# Especificações de Requisitos de Software
> **Projeto:** Folha de Pagamento | **Data:** 05/10/2026

## 1. Introdução 
Este projeto tem como objetivo o desenvolvimento de um sistema de folha de pagamento que permita o cadastro, gerenciamento e cálculo de salários de colaboradores de diferentes categorias. Podendo gerar relatórios individuais e consolidados da folha de pagamento. A partir do desenvolvimento do sistema serão aplicadas práticas de gestão e qualidade buscando garantir o funcionamento correto e a qualidade do sistema. 

### 1.1 Escopo do projeto
O projeto contempla o desenvolvimento do sistema de folha de pagamento destinado ao gerenciamento de colaboradores e ao cálculo de suas respecitvas remunerações, onde o sistema permitirá cadastrar, consultar, alterar e excluir colaboradores. Também podendo realizar de forma automática o cálculo salarial de acordo com a categoria de cada colaborador. 
Serão contempladas três categorias de remuneração no sistema: colaborador padrão, colaborador comissionado e colaborador por produção. Também ira permitir a geração da folha de pagamento individual e consolidada, apresentado os dados dos colaboradores, suas remunerações e o custo total da folha.
Além do desenvolvimento do sistema, o seguinte projeto abrangerá atividades relacionadas à garantia da qualidade de software, incluindo documentação, modelagem, testes, rastreabilidade de requisitos e validação da solução desenvolvida.

### 1.2 Partes Interessadas
| Stakeholder | Interesse |
|:------------|:----------|
| **Departamento Pessoal (DP)** | Usuário direto do sistema, responsável pelo cadastro, gerenciamento dos colaboradores e geração da folha de pagamento. |
| **Gerente do Departamento Pessoal** | Usuário indireto interessado na eficiência operacional do setor e na confiabilidade dos cálculos salariais. |
| **Colaboradores** | Indivíduos que terão suas informações inseridas e processadas no sistema. |
| **Setor Recursos Humanos (RH)**| Potencial beneficiário do sistema. Interesse na organização e precisão dos cálculos. |


### 1.3 Premissas

- **P001:** A empresa disponibilizará as regras de remuneração necessárias para a implementação dos cálculos salariais.
- **P002:** Os usuários do sistema possuirão conhecimentos básicos de informática.
- **P003:** Os usuários do sistema terão acesso à internet.
- **P004:** Os usuários terão acesso a computadores com Windows 10 ou superior, ou distribuições Linux que disponham de navegadores web atualizados.

### 1.4 Restrições

- **R001:** O projeto deverá ser concluído até o dia 1º de dezembro de 2026 (01/12/2026).
- **R002:** O sistema não deverá depender de APIs externas para seu funcionamento.
- **R003:** O sistema deverá contemplar exclusivamente as três categorias de remuneração definidas: padrão, comissionado e por produção.


### 1.5 Benefícios Esperados

É esperado que a implementação do sistema proporcione os seguintes benefícios aos usuários:

- **Automatização dos cálculos salariais:** Redução da necessidade de cálculos manuais

- **Redução de erros:** Diminuição de erros humanos no cálculo de remuneração dos colaboradores.

- **Centralização das informações:** Organização dos dados cadastrais e salariais dos colaboradores em um único sistema.

- **Eficiência operacional:** Redução do tempo necessário para o gerenciamento dos colaboradores e a geração das folhas de pagamento.

- **Facilidade de consulta:** Acesso simplificado às informações dos colaboradores e às folhas de pagamento individuais e coletivas.

- **Padronização dos processos:** Aplicação consistente das regras de remuneração definidas pela empresa.


## 2. Requisitos Funcionais (RF)

### 2.1 Cadastro e manutenção de colaboradores

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF001** | Cadastro de Colaborador | O sistema deverá permitir o cadastro de colaboradores contendo: matrícula, nome, salário base e tipo de colaborador. | Alta |
| **RF002** | Manutenção de Cadastros | O sistema deverá permitir alterar e excluir os dados cadastrais e remuneratórios dos colaboradores. | Alta |
| **RF003** | Confirmação de Exclusão | O sistema deverá solicitar confirmação antes da exclusão de um colaborador cadastrado. | Média |
| **RF004** | Cadastro de Colaborador Padrão | O sistema deverá permitir cadastrar colaboradores que recebem apenas salário base. | Alta |
| **RF005** | Cadastro de Colaborador Comissionado | O sistema deverá permitir informar: valor das vendas e percentual de comissão para o cálculo posterior da remuneração. Caso o percentual não for informado, será o valor definido na (RN009) | Alta |
| **RF006** | Cadastro de Colaborador por Produção | O sistema deverá permitir informar: quantidade produzida e valor pago por unidade produzida para cálculo posterior da remuneração. | Alta |

### 2.2 Consulta e organização de colaboradores

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF007** | Consulta de Colaboradores | O sistema deverá apresentar a lista de colaboradores cadastrados contendo seus dados cadastrais e remuneratórios. | Média |
| **RF008** | Pesquisa de Colaboradores | O sistema deverá permitir pesquisar colaboradores por nome ou matrícula. | Média |
| **RF009** | Filtro por tipo de colaborador | O sistema deverá permitir filtrar os colaboradores cadastrados de acordo com sua categoria de remuneração. | Baixa |
| **RF010** | Ordenação de colaboradores | O sistema deverá permitir ordenar a lista de colaboradores por nome, matrícula ou salário final. | Baixa |

### 2.3 Cálculo e detalhamento da remuneração

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF011** | Cálculo de Salário | O sistema deverá apresentar automaticamente o salário final de cada colaborador de acordo com sua categoria de remuneração. | Alta |
| **RF012** | Detalhamento da Remuneração | O sistema deverá apresentar os valores utilizados no cálculo da remuneração final do colaborador. | Média |

### 2.4 Geração e emissão da folha de pagamento

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF013** | Geração de Folha de Pagamento | O sistema deverá gerar uma folha contendo: matrícula, nome, tipo de colaborador e valor do salário final. | Alta |
| **RF014** | Emissão individual e consolidada | O sistema deverá emitir uma folha individual contendo os dados e a remuneração de um colaborador selecionado, ou uma folha consolidada contendo todos os colaboradores e o valor total das remunerações | Média |
| **RF015** | Emissão de Resumo da Folha | O sistema deverá apresentar o valor total da folha de pagamento somando o salário final de todos os colaboradores. | Média |

### 2.5 Autenticação do administrador

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF016** | Autenticação do Administrador | O sistema deverá permitir que o administrador realize autenticação por meio de usuário e senha para acessar as funcionalidades do sistema | Média |

## 3. Requisitos Não Funcinais  (RNF)

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RNF001** | Usabilidade | O sistema deverá possuir uma interface amigável e intuitiva. | Média |
| **RNF002** | Validação de Dados | O sistema deverá validar os dados de entrada antes de efetuar qualquer cálculo. | Alta |
| **RNF003** | Persistência de Dados | O sistema deverá armazenar os registros dos colaboradores de forma persistente. | Alta |
| **RNF004** | Extensibilidade | O sistema deverá permitir a futura inclusão de novos tipos de remuneração sem necessidade de alterar os cálculos já existentes. | Média |
| **RNF005** | Desempenho | O sistema deverá realizar operações de cadastro, consulta e cálculo sem atrasos perceptíveis durante o uso normal da aplicação. | Média |
| **RNF006** | Confiabilidade dos Cálculos | O sistema deverá produzir resultados consistentes para os cálculos de remuneração, considerando os dados cadastrados e as regras de negócio definidas. | Alta |
| **RNF007** | Integridade dos Dados | O sistema deverá preservar a consistência dos dados armazenados durante operações de cadastro, alteração e exclusão de colaboradores. | Alta |
| **RNF008** | Manutenibilidade | O sistema deverá possuir uma estrutura de código organizada e modular, facilitando sua manutenção e evolução. | Média |
| **RNF009** | Compatibilidade | O sistema deverá ser executável no ambiente definido para o projeto sem necessidade de configurações adicionais além das dependências documentadas. | Média |
| **RNF010** | Acesso ao Sistema | O acesso às funcionalidades administrativas deverá ser permitido somente após autenticação válida | Média |

## 4. Regras de Negócios (RN)

| ID | Nome da Regra | Descrição |
|:---|:--------------|:----------|
| **RN001** | Matrícula Única | Cada colaborador deverá possuir uma matrícula única dentro do sistema. |
| **RN002** | Nome Obrigatório | O nome do colaborador deverá ser informado obrigatoriamente no momento do cadastro. |
| **RN003** | Salário Base Válido | O salário base do colaborador não poderá possuir valor negativo. |
| **RN004** | Valor de Vendas Válido | O valor das vendas informado para colaboradores comissionados não poderá ser negativo. |
| **RN005** | Percentual de Comissão Válido | O percentual de comissão informado para colaboradores comissionados não poderá ser negativo e deverá estar entre 0% e 100%. |
| **RN006** | Quantidade Produzida Válida | A quantidade produzida informada para colaboradores por produção não poderá ser negativa. |
| **RN007** | Valor por Unidade Válido | O valor pago por unidade produzida não poderá ser negativo. |
| **RN008** | Cálculo Automático do Salário | O salário final deverá ser calculado automaticamente pelo sistema de acordo com a categoria do colaborador. |
| **RN009** | Comissão Padrão | Quando o administrador não informar o percentual de comissão no cadastro, o sistema deverá atribuir o percentual padrão de 5% |
| **RN010** | Remuneração Padrão | A remuneração será igual ao salário base |
| **RN011** | Remuneração Comissionada | A remuneração será igual ao salário base acrescido do valor das vendas multiplicado pelo percentual de comissão divido por 100. Dado pela expressão: <br>$\text{SalárioBase} + (\text{ValorVenda} \times \frac{\text{Comissão}}{100})$ |
| **RN012** | Remuneração por Produção | A remuneração será igual ao salário base acrescido da quantidade produzida multiplicada pelo valor pago por unidade. Dadopela expressão: <br> $\text{Salário Base} + \text{Quantidade} \times \text{ValorUnidade}$ |

## 5. Casos de uso (UC)

| ID | Caso de uso | Requisitos relacionados |
|:---|:------------|:------------------------|
| **UC001** | Autenticar Administrador | RF016, RNF010 |
| **UC002** | Cadastrar Colaborador | RF001, RF004, RF005, RF006, RN001–RN007, RN009 |
| **UC003** | Consultar Colaboradores | RF007, RF012, RF010 |
| **UC004** | Alterar Colaborador | RF002 |
| **UC005** | Excluir Colaborador | RF002, RF003 |
| **UC006** | Pesquisar Colaborador | RF008 |
| **UC007** | Filtrar Colaboradores | RF009 |
| **UC008** | Calcular Salário | RF011, RN008, RN010-RN012 |
| **UC009** | Gerar Folha de Pagamento Geral e Individual| RF013, RF014 |
| **UC010** | Emitir resumo da Folha | RF015 |

## 6 Usecase UML

![Usecase UML](plantUML/usecase-diagram.png)

## 6.1 Diagrama de Classes UML

![Class Diagram UML](plantUML/class-diagram.png)
> O diagrama de classes abstrai classes de implementação e outras partes da implementação.

## 6.2 Diagramas de Sequencia UML

### 6.2.1 Cadastrar Colaborador

![Sequence Diagram 1 UML](plantUML/sequence-diagram-cadastrar-colaborador.png)

### 6.2.1 Gerar Folha de Pagamento

![Sequence Diagram 2 UML](plantUML/sequence-diagram-gerar-folha.png)
