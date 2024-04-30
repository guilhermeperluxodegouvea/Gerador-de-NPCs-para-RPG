
// Listas
const raça = ['anão', 'elfo', 'halfling', 'humano', 'draconato', 'gnomo', 'meio-elfo', 'meio-orc', 'tiferino'];
const gênero = ['homem', 'mulher', 'não-binário', 'gênero fluido'];
const sexo = ['homem', 'mulher'];
const classe = ['bárbaro', 'bardo', 'bruxo', 'clérigo', 'druida', 'feiticeiro', 'guerreiro', 'ladino', 'mago', 'monge', 'paladino', 'patrulheiro'];
const profissão = ['acólito', 'artesão', 'artista', 'charlatão', 'criminoso', 'eremita', 'forasteiro', 'herói do povo', 'marinheiro', 'nobre', 'órfão', 'sábio', 'soldado'];
const traços = ['supérfluo', 'viciado', 'conformista', 'nefasto', 'sensível', 'destreinado',
    'romântico', 'irracional', 'habilidoso', 'negligente', 'vivaz', 'curto e grosso',
    'fanático', 'omisso', 'racional', 'grosseiro', 'abobado', 'ardiloso', 'encantador',
    'avarento', 'inseguro', 'inútil', 'lógico', 'sutil', 'respeitável', 'malvado', 'preguiçoso',
    'pessimista', 'solene', 'teimoso', 'calmo', 'útil', 'despreocupado', 'gêneroso', 'dócil', 'alegre',
    'pragmático', 'sereno', 'analista', 'sem esperança', 'prazeroso', 'insensível', 'reconhecido',
    'subestimado', 'intrometido', 'esquecido', 'refinado', 'indispensável', 'estudioso',
    'conservador', 'rude', 'imparável', 'indiferente', 'bipolar', 'idoso', 'imoral', 'ingênuo',
    'privilegiado', 'calado', 'gostável', 'fatigado', 'provocador', 'detestável', 'sagaz',
    'sem tato', 'fanático', 'pobre', 'infantil', 'piedoso', 'sem instrução', 'ingrato',
    'culto', 'rebelde', 'curioso', 'exigente', 'carente', 'honesto', 'agressivo', 'bondoso',
    'corrupto', 'jovial', 'astuto', 'liberal', 'flexível', 'lobo solitário', 'conivente',
    'cuidadoso', 'atraente', 'deficiente', 'otimista', 'endinheirado', 'desanimado',
    'desorientado', 'apaixonado', 'devoto', 'estabilizado', 'inadequado', 'confiável',
    'justo', 'confiante'];

// Variável LGBT
var lgbt = false;

// Gerar aventureiro
function gerarAventureiro() {
    let mensagem = null;
    if (lgbt == true) {
        mensagem = `Esse NPC é ${raça[Math.floor(Math.random() * raça.length)]} ${gênero[Math.floor(Math.random() * gênero.length)]} ${classe[Math.floor(Math.random() * classe.length)]} e é ${traços[Math.floor(Math.random() * traços.length)]} e ${traços[Math.floor(Math.random() * traços.length)]}.`;
    } else {
        mensagem = `Esse NPC é ${raça[Math.floor(Math.random() * raça.length)]} ${sexo[Math.floor(Math.random() * sexo.length)]} ${classe[Math.floor(Math.random() * classe.length)]} e é ${traços[Math.floor(Math.random() * traços.length)]} e ${traços[Math.floor(Math.random() * traços.length)]}.`;
    }

    const saida = document.getElementById("saida");
    saida.innerHTML += "<br><br>" + mensagem;
    rolar();
}

// Gerar cidadão
function gerarCidadao() {
    let mensagem = null;
    if (lgbt == true) {
        mensagem = `Esse NPC é ${raça[Math.floor(Math.random() * raça.length)]} ${gênero[Math.floor(Math.random() * gênero.length)]} ${profissão[Math.floor(Math.random() * profissão.length)]} e é ${traços[Math.floor(Math.random() * traços.length)]} e ${traços[Math.floor(Math.random() * traços.length)]}.`;
    } else {
        mensagem = `Esse NPC é ${raça[Math.floor(Math.random() * raça.length)]} ${sexo[Math.floor(Math.random() * sexo.length)]} ${profissão[Math.floor(Math.random() * profissão.length)]} e é ${traços[Math.floor(Math.random() * traços.length)]} e ${traços[Math.floor(Math.random() * traços.length)]}.`;
    }

    const saida = document.getElementById("saida");
    saida.innerHTML += "<br><br>" + mensagem;
    rolar();
}

// Gerar LGBTs + CSS

let clicado = false;

function gerarLGBT() {
  const botao = document.getElementById("gerarLGBT");
  
  clicado = !clicado;
  lgbt = !lgbt;
  
  if (clicado) {
    botao.classList.add("clicado");
  } else {
    botao.classList.remove("clicado");
  }
}

// Descer a página sozinha

function rolar() {
    var saida = document.getElementById("saida");
    saida.scrollTop = saida.scrollHeight;
  }