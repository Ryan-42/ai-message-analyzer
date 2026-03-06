# AI Message Analyzer

Aplicação web que utiliza **Processamento de Linguagem Natural (NLP)** para analisar automaticamente mensagens e gerar **insights inteligentes para atendimento e suporte**.

O sistema classifica mensagens, detecta prioridade, identifica emoções do usuário e sugere respostas automáticas para acelerar o atendimento.

---

# Demo Online

Acesse a aplicação funcionando:

https://ai-message-analyzer-k4yb.onrender.com

---

# Visão Geral

Empresas recebem diariamente centenas de mensagens de clientes, suporte ou solicitações internas.

Analisar manualmente essas mensagens pode causar:

- demora no atendimento
- dificuldade de priorizar solicitações urgentes
- perda de informações importantes
- retrabalho para equipes de suporte

O **AI Message Analyzer** atua como um **assistente inteligente de triagem**, analisando automaticamente cada mensagem e gerando informações úteis para tomada de decisão.

---

# Funcionalidades

O sistema realiza múltiplas análises automáticas sobre cada mensagem:

### Classificação de Categoria
Detecta automaticamente o tipo da mensagem:

- Financeiro
- Suporte Técnico
- Comercial
- Geral

### Detecção de Prioridade
Identifica urgência da solicitação:

- Alta
- Média
- Baixa

### Análise de Sentimento Avançada

Detecta emoções e contexto da mensagem:

- Frustração 😤
- Urgência ⚠️
- Satisfação 👍
- Positivo 🙂
- Negativo 🙁
- Neutro 😐

### Resumo Automático
Gera um resumo da mensagem utilizando **NLP com compromise**.

### Resposta Sugerida Inteligente
O sistema sugere respostas automáticas considerando:

- categoria da mensagem
- sentimento detectado

### Histórico de Análises
Armazena as mensagens analisadas para consulta posterior.

---

# Tecnologias Utilizadas

## Backend

- Node.js
- Express.js
- REST API

## Processamento de Linguagem Natural

- compromise (NLP)
- sentiment (análise de sentimento)

## Frontend

- HTML5
- CSS3
- JavaScript

## Visual

- particles.js (background animado)

## DevOps / Deploy

- Git
- GitHub
- Render (deploy cloud)

---

# Arquitetura da Aplicação

A aplicação segue uma arquitetura simples baseada em **API + Interface Web**.

Fluxo de funcionamento:

    Usuário envia mensagem
↓
API recebe requisição
↓
Processamento de linguagem natural
↓
Classificação de categoria
↓
Detecção de prioridade
↓
Análise de sentimento
↓
Geração de resumo
↓
Sugestão de resposta
↓
Resultado exibido na interface


---

# Estrutura do Projeto

ai-message-analyzer

server.js → servidor Node.js
package.json → dependências do projeto

public/

index.html → interface da aplicação
script.js → lógica do frontend
style.css → estilos da interface
particles.js → animação de fundo

README.md → documentação do projeto

---

# Como Executar Localmente

### 1 Clone o repositório

git clone https://github.com/Ryan-42/ai-message-analyzer.git


### 2 Entre na pasta do projeto

cd ai-message-analyzer


### 3 Instale as dependências

npm install


### 4 Execute o servidor

node server.js


### 5 Abra no navegador

http://localhost:3000


### Resultado gerado

Resumo

erro no sistema e preciso resolver urgente

Prioridade

Alta

Categoria

Suporte

Sentimento

Frustração 😤

Resposta sugerida

Sentimos muito pelo problema relatado. Nossa equipe técnica já está analisando e retornará em breve.

---

# Aplicações no Mundo Real

Este tipo de sistema pode ser utilizado em:

- Help Desk
- Suporte Técnico
- Atendimento ao Cliente
- Triagem de emails corporativos
- Automação de comunicação empresarial
- CRM e sistemas de ticket

---

# Possíveis Evoluções

O projeto pode evoluir para incluir:

- autenticação de usuários
- histórico individual por usuário
- armazenamento em banco de dados
- dashboard com métricas de mensagens
- integração com email corporativo
- integração com sistemas de ticket
- uso de IA generativa (LLMs)
- classificação de intenção do usuário

---

# Autor

Ryan Monteiro da Silva

GitHub  
https://github.com/Ryan-42

LinkedIn  
https://www.linkedin.com/in/ryan-monteiro-da-silva-71bb7b27a

---

# Licença

Projeto desenvolvido para fins educacionais e portfólio.