// Pegando os elementos do HTML
const alternativas = document.querySelectorAll(".alternativa");
const perguntas = document.querySelectorAll(".pergunta");

const feedback = document.getElementById("feedback");
const pontuacao = document.getElementById("pontuacao");
const numeroPergunta = document.getElementById("numeroPergunta");
const botaoProximo = document.getElementById("botaoProximo");

const resultadoFinal = document.getElementById("resultadoFinal");
const acertos = document.getElementById("acertos");
const percentual = document.getElementById("percentual");
const mensagemFinal = document.getElementById("mensagemFinal");

// Variáveis do quiz
let pontos = 0;
let perguntaAtual = 0;
let respondeu = false;

// Coloca evento de clique em todas as alternativas
for (let i = 0; i < alternativas.length; i++) {

    alternativas[i].addEventListener("click", function() {

        // Só deixa responder se ainda não respondeu
        if (respondeu == false) {

            respondeu = true;

            if (alternativas[i].classList.contains("Alternativa_Correta")) {
                feedback.textContent = "Resposta correta!";
                pontos = pontos + 1;
                pontuacao.textContent = pontos;
                alternativas[i].classList.add("correta");
            } else {
                feedback.textContent = "Resposta errada!";
                alternativas[i].classList.add("errada");
            }

        }

    });

}

// Botão de próxima pergunta
botaoProximo.addEventListener("click", function() {

    // Esconde a pergunta atual
    perguntas[perguntaAtual].classList.remove("ativa");

    // Vai para a próxima pergunta
    perguntaAtual = perguntaAtual + 1;

    // Libera para responder novamente
    respondeu = false;
