new Vue({
    el: "#app", 
    data: {
        contador: 0,
        contador_2: 0,
        x: 0,
        y: 0,
        valor_1: "",
        valor_2: "",
        titulo_1: "Usando Vue JS",
        titulo_2: "Usando Vue JS"
    },
    watch: { // assistir uma variavel
        contador() { // precisa ser do msm nome da variavel
            if (this.contador == 1) {
                setTimeout(() => {
                    this.contador = 0
                }, 3000)
            }
        }
    },
    computed: { // transforma uma função em propriedade
        resultado() {
            return ( // é obrigatório retornar um valor
                this.contador >= 5 ?
                `Maior que ${5}`
                : `Menor que ${5}`
            )
        }
    },
    methods: {
        somar(somar, e) {
            console.log(e)
            this.contador += somar
        },
        get_mouse(e) {
            this.x = e.clientX
            this.y = e.clientY
        },
        exibir_alerta(e) {
            alert("Mostrando um alerta")
        },
        digitar_1(e) {
            this.valor_1 = e.target.value
        },
        aumentar(v) {
            this.contador += v
        },
        aumentar_2(v) {
            this.contador_2 += v
        }
    }
})
