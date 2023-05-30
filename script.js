const numerosAleatorios = () => {
  let valoresAleatorios = new Array;

  for (let i = 0; i < 6; i++) {
    const valor = Math.floor(Math.random() * 100);
    valoresAleatorios.push(valor);
  }
  return valoresAleatorios;
};

const soma = (n1, n2) => n1 + n2;
const subtracao = (n1, n2) => n1 - n2;
const multiplicacao = (n1, n2) => n1 * n2;
const divisao = (n1, n2) => n1 / n2;  

const botaoIniciar = document.querySelector("#botaoIniciar");
const botaoVerificarResposta = document.querySelector(
  "#botaoVerificarResposta"
);
const botaoVerificarRespostaSub = document.querySelector("#botaoVerificarRespostaSub")

botaoIniciar.addEventListener("click", () => {
  let [soma1, soma2, sub1, sub2, mult1, mult2] = numerosAleatorios();

  const valorSoma1 = document.querySelector("#valorSoma1");
  const valorSoma2 = document.querySelector("#valorSoma2");

  const valorSub1 = document.querySelector("#valorSub1");
  const valorSub2 = document.querySelector("#valorSub2");

  const valorMult1 = document.querySelector("#valorMult1");
  const valorMult2 = document.querySelector("#valorMult2");

  valorSoma1.innerText = soma1;
  valorSoma2.innerText = soma2;

  valorSub1.innerText = sub1;
  valorSub2.innerText = sub2;

  valorMult1.innerText = mult1;
  valorMult2.innerText = mult2;
});

/* CRIANDO O SISTEMA DE ADIÇÃO */

botaoVerificarResposta.addEventListener("click", () => {
  let valorSoma1 = parseInt(document.querySelector("#valorSoma1").textContent);
  let valorSoma2 = parseInt(document.querySelector("#valorSoma2").textContent);

  const respostaUsuario = document.querySelector("#respostaUsuario");
  const respostaVerificacao = document.querySelector("#respostaVerificacao");

  let resultado = soma(valorSoma1, valorSoma2);

  if (parseInt(respostaUsuario.value) === resultado) {
    respostaUsuario.value = "";
    respostaVerificacao.innerHTML = `<p class="p_resposta">Você acertou!&#x2705<p>`;
  } else {
    respostaUsuario.value = "";
    respostaVerificacao.innerHTML = `<p class="p_resposta"><b>Você errou!</b>&#x274C a resposta correta seria <b>${resultado}</b> </p>`;
  }
});

/* CRIANDO O SISTEMA DE SUBTRAÇÃO */

botaoVerificarRespostaSub.addEventListener("click", () => {
  let valorSub1 = parseInt(document.querySelector("#valorSub1").textContent);
  let valorSub2 = parseInt(document.querySelector("#valorSub2").textContent);

  const respostaUsuarioSub = document.querySelector("#respostaUsuarioSub");
  const respostaVerificacaoSub = document.querySelector("#respostaVerificacaoSub");

  let resultado = subtracao(valorSub1, valorSub2);

  if (parseInt(respostaUsuarioSub.value) === resultado) {
    respostaUsuarioSub.value = "";
    respostaVerificacaoSub.innerHTML = `<p class="p_resposta">Você acertou!&#x2705</p>`;
  } else {
    respostaUsuarioSub.value = "";
    respostaVerificacaoSub.innerHTML = `<p class="p_resposta"><b>Você errou!</b>&#x274C a resposta correta seria <b>${resultado}</b>`;
  }
});

/* CRIANDO O SISTEMA DE MULTIPLICAÇÃO */

botaoVerificarRespostaMult.addEventListener("click", () => {
    let valorMult1 = parseInt(document.querySelector("#valorMult1").textContent);
    let valorMult2 = parseInt(document.querySelector("#valorMult2").textContent);
  
    const respostaUsuarioMult = document.querySelector("#respostaUsuarioMult");
    const respostaVerificacaoMult = document.querySelector("#respostaVerificacaoMult");
  
    let resultado = multiplicacao(valorMult1, valorMult2);
  
    if (parseInt(respostaUsuarioMult.value) === resultado) {
      respostaUsuarioMult.value = "";
      respostaVerificacaoMult.innerHTML = `<p class="p_resposta">Você acertou!&#x2705</p>`;
    } else {
      respostaUsuarioMult.value = "";
      respostaVerificacaoMult.innerHTML = `<p class="p_resposta"><b>Você errou!</b>&#x274C a resposta correta seria <b>${resultado}</b>`;
    }
  });