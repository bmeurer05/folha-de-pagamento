# Especificações de Requisitos de Software
> **Projeto:** Folha de Pagamento | **Data:** 05/10/2026

## 1. Introdução
Este projeto tem como objetivo o desenvolvimento de um sistema de folha de pagamento que permita o cadastro, gerenciamento e cálculo de salários de colaboradores de diferentes categorias. Podendo gerar relatórios individuais e consolidados da folha de pagamento. A partir do desenvolvimento do sistema serão aplicadas práticas de gestão e qualidade buscando garantir o funcionamento correto e a qualidade do sistema. 

### 1.1 Escopo do projeto
O projeto contempla o desenvolvimento do sistema de folha de pagamento destinado ao gerenciamento de colaboradores e ao cálculo de suas respecitvas remunerações, onde o sistema permitirá cadastrar, consultar, alterar e excluir colaboradores. Também podendo realizar de forma automática o cálculo salarial de acordo com a categoria de cada colaborador. 
Serão contempladas três categorias de remuneração no sistema: colaborador padrão, colaborador comissionado e colaborador por produção. Também ira permitir a geração da folha de pagamento individual e consolidade, apresentado os dados dos colaboradores, suas remunerações e o custo total da folha.
Além do desenvolvimento do sistema, o seguinte projeto abrangerá atividades relacionadas à garantia da qualidade de software, incluindo documentação, modelagem, testes, rastreabilidade de requisitos e validação da solução desenvolvida.

## 2. Requisitos Runcionais (RF)

| ID | Nome do Requisito | Descrição | Prioridade |
|:---|:------------------|:----------|:-----------|
| **RF001** | Cadastro de Colaborador | O sistema deverá permitir o cadastro de colaboradores contendo: matrícula, nome, salário base e tipo de colaborador. | Alta |
| **RF002** | Cadastro de Colaborador Padrão | O sistema deverá permitir cadastrar colaboradores que recebem apenas salário base. | Alta |
| **RF003** | Cadastro de Colaborador Comissionado | O sistema deverá permitir informar: valor das vendas e percentual de comissão para o cálculo posterior da remuneração. | Alta |
| **RF004** | Cadastro de Colaborador por Produção | O sistema deverá permitir informar: quantidade produzida e valor pago por unidade produzida para cálculo posterior da remuneração. | Alta |
| **RF005** | Consulta de Colaboradores | O sistema deverá apresentar a lista de colaboradores cadastrados contendo seus dados cadastras e remuneratórios. | Média |
| **RF006** | Cálculo de Salário | O sistema deverá apresentar automaticamente o salário final de cada colaborador de acordo com sua categoria de remuneração. | Alta |
| **RF007** | Geração de Folha de Pagamento | O sistema deverá gerar uma folha contendo: matrícula, nome, tipo de colaborador e valor do salário final. | Alta |
| **RF008** | Emissão de Resumo da Folha | O sistema deverá apresentar o valor total da folha de pagamento somando o salário final de todos os colaboradores. | Média |
| **RF009** | Manutenção de Cadastros | O sistema deverá apresentar o valor total da folha de pagamento somando o salário final de todos os colaboradores. | Alta |
| **RF010** | Pesquisa de Colaboradores | O sistema deverá permitir pesquisar colaboradores por nome ou matrícula. | Média |
| **RF011** | Filtro por tipo de colaborador | O sistema deverá permitir filtrar os colaboradores cadastrados de acordo com sua categoria de remuneração. | Baixa |
| **RF012** | Detalhamento da Remuneração | O sistema deverá apresentar os valores utilizados no cálculo da remuneração final do colaborador. | Média |
| **RF013** | Ordenação de colaboradores | O sistema deverá permitir ordenar a lista de colaboradores por nome, matrícula ou salário final. | Baixa |
| **RF013** | Confirmação de Exclusão | O sistema deverá solicitar confirmação antes da exclusão de um colaborador cadastrado. | Média |
| **RF014** | Autenticação do Administrador | O sistema deverá permitir que o administrador realize autenticação por meio de usuário e senha para acessar as funcionalidades do sistema | Média |

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

# 4. Regras de Negócios (RN)

| ID | Nome da Regra | Descrição |
|:---|:--------------|:----------|
| **RN001** | Matrícula Única | Cada colaborador deverá possuir uma matrícula única dentro do sistema. |
| **RN002** | Nome Obrigatório | O nome do colaborador deverá ser informado obrigatoriamente no momento do cadastro. |
| **RN003** | Salário Base Válido | O salário base do colaborador não poderá possuir valor negativo. |
| **RN004** | Valor de Vendas Válido | O valor das vendas informado para colaboradores comissionados não poderá ser negativo. |
| **RN005** | Percentual de Comissão Válido | O percentual de comissão informado para colaboradores comissionados não poderá ser negativo. |
| **RN006** | Quantidade Produzida Válida | A quantidade produzida informada para colaboradores por produção não poderá ser negativa. |
| **RN007** | Valor por Unidade Válido | O valor pago por unidade produzida não poderá ser negativo. |
| **RN008** | Cálculo Automático do Salário | O salário final deverá ser calculado automaticamente pelo sistema de acordo com a categoria do colaborador. |