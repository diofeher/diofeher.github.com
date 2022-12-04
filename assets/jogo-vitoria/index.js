Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
const jogadas = [
  'O jogador do lado esquerdo bebe 2 doses',
  'Escolha um jogador para beber 4 doses',
  'O jogador do lado direito bebê 2 doses',
  'Você tem 6 doses. Escolha 1 ou 6 jogadores para beberem. ',
  'Maiores de 18 anos bebem 2 doses',
  'Peça para cada jogador escolher um número. Os que escolherem os números ímpares, bebem 1 dose.',
  'Ninguém bebe ',
  'O jogador do lado esquerdo bebê 2 doses',
  'Escolha 2 jogadores para jogarem par ou ímpar. O perdedor bebe 3 doses.',
  'O jogador do lado direito bebê 2 doses',
  'Os jogadores que já stalkearam seus ex’s bebem 5 doses.',
  'Faça qualquer pergunta de sim ou não para os jogadores. Quem responder NÃO, bebe 2 doses. ',
  'Todos os jogadores devem falar um animal com a letra C. Quem não souber bebe 1 dose. ',
  'Por 1 rodada os jogadores não podem falar nenhuma palavra com C ou S. Quem falar bebe 1 dose.',
  'Faça 10 polichinelos ou beba 2 doses',
  'Quem já brigou com algum dos jogadores bebe 1 dose.',
  'Quem esta em um relacionamento bebe 2 doses.',
  'Beba 1 doses',
  'Beba 1 doses',
  'Ninguém bebe',
  'Todos os jogadores que nasceram em ano par bebem 1 dose',
  'Faça qualquer pergunta de sim ou não para os jogadores. Quem responder SIM, bebe 2 doses. ',
  'Escolha um jogador e jogue verdade ou consequência. Se não quiser responder ou cumprir a consequência, bebe 4 doses. ',
  'Você tem 10 doses. Escolha 1 ou 10 jogadores para beberem.',
  'Os jogadores que tiverem irmãos bebem tantas doses quanto irmãos tiverem. ',
  'Escolha 1 jogador para falar uma fruta com a letra J. Se errar ele bebe 1 dose',
  'Os jogadores que estiverem usando anel bebem 2 doses',
  'Faça um telefone sem fio. Se a mensagem chegar certa ninguém bebe, se chegar errada, todos bebem 1 dose.',
  'Todos os jogadores que tiverem colado em uma prova bebem 1 dose ',
  'Quem já ficou com mais de 1 pessoa no mesmo dia bebe 2 doses',
  'Dê 1 dose para o jogador mais treteiro ',
  'O jogador mais baixo bebe 2 doses',
  'O jogador mais novo bebe duas doses',
  'Os jogadores solteiros bebem 2 doses',
  'Passe a vez',
  'Mulheres bebem 1 dose',
  'Homens bebem 1 dose',
  'Faça uma rodada de eu nunca',
  'Se você não souber assoviar beba',
  'Escolha um jogador, conte 2 verdades e 1 mentira. Ele deve acertar qual é a mentira. Se ele errar ele bebe 2 doses. ',
  'Rode uma garrafa, a pessoa para quem ela apontar quando parar de rodar bebe 3 doses.',
  'Crie uma regra ',
  'Cante uma música ou beba 2 doses',
  'Beije alguém ou beba 4 doses',
  'Sente no colo de alguém por 2 rodas ou beba 4 doses',
];

const loadPhrase = () => {
  const txt = document.getElementById('display-txt');
  txt.textContent = jogadas.sample();
}

window.onload = function() {
  const scnInstrucoes = document.getElementById('screen-instrucoes');
  const scnPrincipal = document.getElementById('screen-principal');
  const scnJogo = document.getElementById('screen-jogo');

  const btnMenu = document.getElementsByClassName('btn-menu');
  console.log(btnMenu);
  const btnJogar = document.getElementById('btn-jogar');
  const btnInstrucoes = document.getElementById('btn-instrucoes');
  const btnGarrafa = document.getElementById('btn-garrafa');

  for (let i = 0; i < btnMenu.length; i++ ) (function(i){ 
    btnMenu[i].onclick = function() {
      scnInstrucoes.style.display = "none";
      scnPrincipal.style.display = "block";
      scnJogo.style.display = "none";
    }
  })(i);



  btnJogar.onclick = function() {
    scnInstrucoes.style.display = "none";
    scnPrincipal.style.display = "none";
    scnJogo.style.display = "block";
    loadPhrase();
  }

  btnInstrucoes.onclick = function() {
    scnPrincipal.style.display = "none";
    scnInstrucoes.style.display = "block";
  }

  btnGarrafa.onclick = function() {
    loadPhrase();
  }
}
