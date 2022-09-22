new Vue({
    el: "#desafio", // Tranformando uma tag em um elemento
    data: {
        meu_nome: "Davi",
        minha_idade: 25,
        link_imagem: "./images/imagem-01.jpg"
    },
    methods: {
        rand_numero() {
            return Math.random()
        },
    }
})
