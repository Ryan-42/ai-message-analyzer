# AI Message Analyzer

Aplicação web que utiliza **Processamento de Linguagem Natural (NLP)** para analisar automaticamente mensagens recebidas e gerar insights úteis para equipes de suporte, atendimento ou comercial.

A ferramenta classifica mensagens, detecta prioridade, analisa sentimento e sugere respostas automáticas para acelerar o atendimento.

---

#  Demo Online

Acesse a aplicação funcionando:

https://ai-message-analyzer-k4yb.onrender.com

---

#  Sobre o Projeto

Empresas recebem diariamente diversas mensagens de clientes, suporte ou solicitações internas.

Analisar manualmente todas essas mensagens pode gerar:

* demora no atendimento
* dificuldade de priorizar solicitações
* perda de informações importantes
* retrabalho para equipes de suporte

O **AI Message Analyzer** funciona como um assistente inteligente que analisa automaticamente cada mensagem e fornece informações importantes para facilitar a tomada de decisão.

---

#  Funcionalidades

✔ Classificação automática de mensagens
✔ Detecção de prioridade (Alta, Média ou Baixa)
✔ Análise de sentimento da mensagem
✔ Geração de resumo automático
✔ Sugestão de resposta automática
✔ Histórico de mensagens analisadas

---

#  Tecnologias Utilizadas

Backend

* Node.js
* Express.js

Processamento de Linguagem Natural

* compromise (NLP)
* sentiment (análise de sentimento)

Frontend

* HTML
* CSS
* JavaScript

Ferramentas

* Git
* GitHub
* Render (deploy da aplicação)

---

#  Arquitetura do Projeto

A aplicação segue uma arquitetura simples de API + interface web.

Fluxo:

Usuário envia mensagem →
API processa com NLP →
Sistema classifica prioridade e categoria →
Sistema analisa sentimento →
Sistema gera resposta sugerida →
Resultado exibido na interface

---

#  Estrutura do Projeto

ai-message-analyzer

server.js → servidor Node.js
package.json → dependências do projeto

public/

index.html → interface da aplicação
script.js → lógica do frontend
style.css → estilos da interface

README.md → documentação do projeto

---

# ▶ Como Executar Localmente

Clone o repositório

git clone https://github.com/Ryan-42/ai-message-analyzer.git

Entre na pasta do projeto

cd ai-message-analyzer

Instale as dependências

npm install

Execute o servidor

node server.js

Abra no navegador

http://localhost:3000

---

#  Exemplo de Análise

Mensagem enviada

"Olá, estou com um problema urgente no sistema de pagamento."

Resultado gerado pelo sistema

Resumo
problema urgente no sistema de pagamento

Prioridade
Alta

Categoria
Financeiro

Sentimento
Negativo

Resposta sugerida
Vamos verificar as informações financeiras e retornaremos em breve.

---

#  Possíveis Evoluções

O projeto pode evoluir para incluir funcionalidades mais avançadas como:

* integração com IA generativa (OpenAI ou LLMs)
* armazenamento em banco de dados
* dashboard com métricas de mensagens
* sistema de login de usuários
* integração com email corporativo
* integração com sistemas de suporte

---

#  Aplicações no Mundo Real

Este tipo de sistema pode ser utilizado em:

* help desk
* suporte técnico
* atendimento ao cliente
* triagem de emails corporativos
* automação de comunicação empresarial

---

#  Autor

Ryan Monteiro da Silva

GitHub
https://github.com/Ryan-42

LinkedIn
https://www.linkedin.com/in/ryan-monteiro-da-silva-71bb7b27a

---

#  Licença

Projeto desenvolvido para fins educacionais e de portfólio.
