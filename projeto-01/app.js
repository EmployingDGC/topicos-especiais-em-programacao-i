new Vue({
	el: '#app',
	data: {
        status: {
            Jogador: {
                vida: 100,
                ataque: {
                    especial: 3,
                    maximo: 10,
                    minimo: 5
                },
                cura: {
                    usos: 1,
                    maxima: 16,
                    minima: 9
                }
            },
            Invasor: {
                vida: 100,
                ataque: {
                    especial: 0,
                    maximo: 14,
                    minimo: 5
                },
                cura: {
                    usos: 0,
                    maxima: 0,
                    minima: 0
                }
            }
        },
        vencedor: {
            Jogador: false,
            Invasor: false,
        },
        iniciar: false,
        log: []
	},
    methods: {
        func_btn_attack(bonus) {
            const atk_jogador = this.status.Jogador.ataque

            let atk_bonus = 0

            if (atk_jogador.especial > 0 && bonus > 0) {
                atk_bonus += bonus
                atk_jogador.especial -= 1
            }
            
            this.func_attack_jogador(atk_bonus)
            this.func_attack_invasor()

            this.func_verif_vencedor()
        },
        func_btn_curar() {
            const jogador = this.status.Jogador

            if (jogador.cura.usos > 0) {
                jogador.cura.usos -= 1

                const cura = (
                    Math.floor(
                        Math.random()
                        * jogador.cura.maxima
                    ) + jogador.cura.minima
                )

                jogador.vida += cura

                this.func_add_log({
                    class: "heal_log",
                    text: `JOGADOR CURADO EM ${cura}% `
                })
    
                this.func_attack_invasor()
            }
        },
        func_attack_jogador(atk_bonus) {
            const invasor = this.status.Invasor
            const ataque = this.status.Jogador.ataque

            const dano = (
                Math.floor(
                    Math.random()
                    * ataque.maximo
                ) + ataque.minimo
                + atk_bonus
            )

            invasor.vida -= dano

            this.func_add_log({
                class: "player_log",
                text: `JOGADOR ATINGIU O INVASOR COM ${dano}% DE DANO`
            })
        },
        func_attack_invasor() {
            const jogador = this.status.Jogador
            const ataque = this.status.Invasor.ataque

            const dano = (
                Math.floor(
                    Math.random()
                    * ataque.maximo
                ) + ataque.minimo
            )

            jogador.vida -= dano

            this.func_add_log({
                class: "invasor_log",
                text: `INVASOR ATINGIU O JOGADOR COM ${dano}% DE DANO`
            })
        },
        func_verif_vencedor() {
            const jogador = this.status.Jogador
            const invasor = this.status.Invasor
            const vencedor = this.vencedor

            if (invasor.vida <= 0) {
                invasor.vida = 0
                vencedor.Jogador = true
                this.iniciar = false
            }
            
            if (jogador.vida <= 0) {
                jogador.vida = 0
                vencedor.Invasor = true
                this.iniciar = false
            }
        },
        func_reset() {
            const jogador = this.status.Jogador
            const invasor = this.status.Invasor
            const vencedor = this.vencedor

            jogador.vida = 100
            jogador.cura.usos = 1
            jogador.ataque.especial = 3

            invasor.vida = 100
            invasor.cura.usos = 0
            invasor.ataque.especial = 0

            vencedor.Jogador = false
            vencedor.Invasor = false

            this.log = []
        },
        func_add_log(log) {
            this.log.push(log)
        }
    }
})
