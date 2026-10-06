//alert ("Welcome to LANCHONETE!");


//ESSE SERIA O JEITO MAIS DIFICIL E DARIA DOR DE CABEÇA
// const produtos = ["duplo bacon", "frango duplo","megamash","whopper"];
// const promocao = ["naruto","sasuke","kakashi","jiraya"];
// const semana = ["semana1","semana2","semana3", "semana4"];
// let promocaodaSemana = [];


// for (let i = 0; i < 4; i++) {
// promocaodaSemana.push(semana[i] + "  " + produtos[i] + "   " + promocao[i]);
// }
// console.log(promocaodaSemana);


const promocoes = [
    {
        semana: "semana1",
        produto:"Mega Staker",
        brinde:"Goku"
    },

    {
        semana: "semana2",
        produto:"whopper furioso",
        brinde:"vegeta"
    },

    {
        semana: "semana3",
        produto:"Mega Rodeo",
        brinde:"Gohan"
    },

    {
        semana: "semana4",
        produto:"Bigking",
        brinde:"Trunks"
    },
];

for (let i =0; i < promocoes.length; i++){
    
    // console.log (promocoes[i].semana);
    // console.log (promocoes[i].produto);
    // console.log (promocoes[i].brinde) ;
    //PODE FICAR TUDO NA MESMA LINHA TAMBEM 
    console.log (promocoes[i].semana + "  " + promocoes[i].produto + "  " + promocoes[i].brinde);
}
