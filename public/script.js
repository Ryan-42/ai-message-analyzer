async function analyze(){

const message = document.getElementById("message").value

if(message.trim()===""){
alert("Digite uma mensagem primeiro")
return
}

document.getElementById("loading").style.display="block"
document.getElementById("results").style.display="none"

const response = await fetch("/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({message})

})

const data = await response.json()

document.getElementById("loading").style.display="none"
document.getElementById("results").style.display="block"

document.getElementById("resumo").innerText="Resumo: "+data.resumo
document.getElementById("prioridade").innerText="Prioridade: "+data.prioridade
document.getElementById("categoria").innerText="Categoria: "+data.categoria
document.getElementById("sentimento").innerText="Sentimento: "+data.sentimento
document.getElementById("resposta").innerText="Resposta sugerida: "+data.resposta

carregarHistorico()

}

function copiarResposta(){

const texto = document.getElementById("resposta").innerText

navigator.clipboard.writeText(texto)

alert("Resposta copiada!")

}

async function carregarHistorico(){

const response = await fetch("/history")
const data = await response.json()

const container = document.getElementById("history")

container.innerHTML=""

data.slice().reverse().forEach(item=>{

const div = document.createElement("div")

div.innerHTML = `
<p><b>Mensagem:</b> ${item.mensagem}</p>
<p><b>Categoria:</b> ${item.categoria}</p>
<p><b>Prioridade:</b> ${item.prioridade}</p>
<p><b>Sentimento:</b> ${item.sentimento}</p>
`

container.appendChild(div)

})

}

window.onload = carregarHistorico