const express = require("express")
const cors = require("cors")
const nlp = require("compromise")
const Sentiment = require("sentiment")

const app = express()
const sentiment = new Sentiment()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const historico = []

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

function classificarMensagem(texto){

texto = texto.toLowerCase()

if(texto.includes("nota fiscal") ||
texto.includes("pagamento") ||
texto.includes("boleto")){
return "Financeiro"
}

if(texto.includes("erro") ||
texto.includes("problema") ||
texto.includes("não funciona")){
return "Suporte"
}

if(texto.includes("preço") ||
texto.includes("orçamento") ||
texto.includes("contratar")){
return "Comercial"
}

return "Geral"
}

function gerarResumo(texto){

const doc = nlp(texto)
const frases = doc.sentences().out("array")

return frases[0] || texto.substring(0,100)
}

function detectarSentimento(texto){

const resultado = sentiment.analyze(texto)

if(resultado.score > 1) return "Positivo 😀"
if(resultado.score < -1) return "Negativo 😡"

return "Neutro 😐"
}

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

return respostas[categoria]
}

app.post("/analyze",(req,res)=>{

const {message} = req.body

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

})

app.get("/history",(req,res)=>{

res.json(historico)

})

app.listen(3000,()=>{

console.log("Servidor rodando em http://localhost:3000")

})