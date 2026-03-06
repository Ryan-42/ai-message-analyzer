const express = require("express")
const cors = require("cors")
const nlp = require("compromise")
const Sentiment = require("sentiment")

const app = express()
const sentiment = new Sentiment()

// PORTA PARA DEPLOY
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const historico = []

// Detectar prioridade
function detectarPrioridade(texto){

texto = texto.toLowerCase()

const alta = [
"urgente",
"imediato",
"hoje",
"agora",
"rápido"
]

const media = [
"amanhã",
"essa semana",
"quando possível"
]

if(alta.some(p => texto.includes(p))) return "Alta"
if(media.some(p => texto.includes(p))) return "Média"

return "Baixa"
}

// Classificar categoria
function classificarMensagem(texto){

texto = texto.toLowerCase()

if(
texto.includes("nota fiscal") ||
texto.includes("pagamento") ||
texto.includes("boleto")
){
return "Financeiro"
}

if(
texto.includes("erro") ||
texto.includes("problema") ||
texto.includes("não funciona")
){
return "Suporte"
}

if(
texto.includes("preço") ||
texto.includes("orçamento") ||
texto.includes("contratar")
){
return "Comercial"
}

return "Geral"
}

// Gerar resumo
function gerarResumo(texto){

const doc = nlp(texto)
const frases = doc.sentences().out("array")

return frases[0] || texto.substring(0,100)
}

// Detectar sentimento
function detectarSentimento(texto){

const resultado = sentiment.analyze(texto)

if(resultado.score > 1) return "Positivo 😀"
if(resultado.score < -1) return "Negativo 😡"

return "Neutro 😐"
}

// Resposta automática
function sugerirResposta(categoria){

const respostas = {

Financeiro:
"Vamos verificar as informações financeiras e retornaremos em breve.",

Suporte:
"Nosso time técnico irá analisar o problema e responder o mais rápido possível.",

Comercial:
"Obrigado pelo interesse! Nossa equipe comercial entrará em contato.",

Geral:
"Recebemos sua mensagem e responderemos em breve."

}

return respostas[categoria] || respostas["Geral"]
}

// ROTA DE ANÁLISE
app.post("/analyze",(req,res)=>{

try{

const { message } = req.body

if(!message || message.trim() === ""){
return res.status(400).json({ error: "Mensagem vazia" })
}

const prioridade = detectarPrioridade(message)
const categoria = classificarMensagem(message)
const resumo = gerarResumo(message)
const sentimento = detectarSentimento(message)
const resposta = sugerirResposta(categoria)

const analise = {
mensagem: message,
prioridade,
categoria,
sentimento,
resumo,
data: new Date()
}

historico.push(analise)

res.json({
resumo,
prioridade,
categoria,
sentimento,
resposta
})

}catch(error){

console.error("Erro na análise:",error)

res.status(500).json({
error:"Erro interno ao analisar mensagem"
})

}

})

// HISTÓRICO
app.get("/history",(req,res)=>{

res.json(historico)

})

// INICIAR SERVIDOR
app.listen(PORT,()=>{

console.log(`Servidor rodando na porta ${PORT}`)

})