let jogadores = {Nome: ['Mohamed Salah','Karim Benzema','Kevin De Bruyne','Neymar','Erling Haaland','Vinicius Junior','Kylian Mbappé'], 
Posicao: ['Atacante','Atacante','Meia','Atacante','Atacante','Atacante','Atacante'],
Idade: ['29 Anos','34 Anos','30 Anos','29 Anos','21 Anos','21 Anos','23 Anos'], 
Nacionalidade: ['Egito','França','Belgica','Brasil','Noruega','Brasil','França'],
Clube:['Liverpool','Real Madrid','Manchester City','Paris Saint-Germain','Borussia Dortmund','Real Madrid','Paris Saint-Germain'],
src:['https://conteudo.imguol.com.br/c/esporte/f2/2022/01/03/salah-pode-perder-ate-tres-jogos-do-campeonato-ingles-por-conta-da-can-1641213984359_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/4b/2022/01/08/benzema-comemora-seu-300-gol-pelo-real-madrid-1641676688470_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/a2/2022/01/15/kevin-de-bruyne-celebra-o-gol-do-manchester-city-1642255889859_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/e1/2022/01/13/neymar-e-o-jogador-mais-caro-da-historia-do-futebol-mundial-1642075477393_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/73/2021/12/15/haaland-pula-ao-comemorar-gol-marcado-pelo-borussia-dortmund-diante-do-greuther-furth-1639614214722_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/89/2022/01/12/vinicius-junior-do-real-madrid-comemora-gol-marcado-diante-do-barcelona-1642017165005_v2_750x421.jpg.webp',
'https://conteudo.imguol.com.br/c/esporte/34/2021/12/07/mbappe-atigiu-marca-ao-balancar-as-redes-contra-o-brugge-1638901919484_v2_900x506.jpg.webp'],
Numero:['2','3','4','5','6','7','1']};


let img = document.querySelector('#imagem')

let contador = 0;
let numero = document.querySelector('#numero')
let nome = document.querySelector('#nome')
let posicao = document.querySelector('#posicao')
let idade = document.querySelector('#idade')
let nacionalidade = document.querySelector('#nacionalidade')
let clube = document.querySelector('#clube')

function trocaJogador (){
    contador++;
    numero.innerHTML = jogadores.Numero[contador-1]
    img.src = jogadores.src[contador-1];
    nome.innerHTML = jogadores.Nome[contador-1];
    posicao.innerHTML = jogadores.Posicao[contador-1];
    idade.innerHTML = jogadores.Idade[contador-1];
    nacionalidade.innerHTML = jogadores.Nacionalidade[contador-1];
    clube.innerHTML = jogadores.Clube[contador-1]
    if (contador == 7){
        contador = 0;
    }
}
