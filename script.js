const elemento = document.getElementById("data-hoje")
console.log(elemento)
const hoje = new Date()
console.log(hoje)
const dataFormatada = hoje.toLocaleDateString('pt-br',{
    weekday: "long",
    day: '2-digit',
    month: 'long',
    year: 'numeric'
})
elemento.textContent= dataFormatada
// resultado data de hoje

const mostrarHora = setInterval(() => {
   const horaAgora = new Date()        
   // pega a hora AGORA
const horaFormatada = horaAgora.toLocaleTimeString('pt-br')  
// formata → "19:13:33"
document.getElementById("hora-agora").textContent = horaFormatada  
// coloca na página
}, 1000)

elemento.addEventListener("click", () => {
    alert("Hoje é " + dataFormatada)
})

const botoes = document.querySelectorAll(".humor-btn")

botoes.forEach(function(botao){
    botao.addEventListener("click", function() {
        const humorEscolhido = botao.dataset.humor
        
        // remove ativo de todos os botões
        botoes.forEach(function(b){
            b.classList.remove("ativo")
        })
        // adiciona ativo ao botão clicado
        botao.classList.add("ativo")
        // coloca na página
        document.getElementById("humor-texto").textContent = "Hoje estou me sentindo " + humorEscolhido
    })
})