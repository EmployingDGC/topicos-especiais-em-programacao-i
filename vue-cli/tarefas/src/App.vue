<template>
	<div id="app" class="flex-center">
		<h1>Tarefas</h1>

		<NovaTarefa />
		
		<BarraProgresso v-if="tarefas.length" :progresso="progresso" />
		
		<TarefasGrid :tarefas="tarefas" />
	</div>
</template>


<script>
import TarefasGrid from './components/TarefasGrid.vue'
import NovaTarefa from './components/NovaTarefa.vue'
import BarraProgresso from './components/BarraProgresso.vue'

import onNovaTarefa from "./events/onNovaTarefa"
import onToggleTarefa from "./events/onToggleTarefa"
import onDelTarefa from "./events/onDelTarefa"
import onUpdateBarraProgresso from "./events/onUpdateBarraProgresso"

export default {
	name: "App",
	components: {
		TarefasGrid,
		NovaTarefa,
		BarraProgresso
	},
	data() {
		return {
			tarefas: [],
			progresso: 0
		}
	},
	methods: {
		nova_tarefa(nome) {
			const realy_nome = String(nome).trim()

			if (!realy_nome) {
				return
			}
			
			for (const i in this.tarefas) {
				const nome_tarefa = this.tarefas[i].nome.toUpperCase()

				if (nome_tarefa == realy_nome.toUpperCase()) {
					return
				}
			}
			
			this.tarefas.push({
				nome: realy_nome,
				pendente: true
			})
		},
		toggle_tarefa(nome) {
			for (const i in this.tarefas) {
				const nome_tarefa = this.tarefas[i].nome

				if (nome_tarefa == nome) {
					this.tarefas[i].pendente = !this.tarefas[i].pendente

					return
				}
			}
		},
		del_tarefa(nome) {
			this.tarefas = this.tarefas.filter((t) => t.nome != nome)
		},
		calc_progresso() {
            let count_not_pendentes = 0

            for (const i in this.tarefas) {
                if (!this.tarefas[i].pendente) {
                    count_not_pendentes += 1
                }
            }

            this.progresso = Math.trunc(
				(count_not_pendentes * 100)
				/ this.tarefas.length
			)
        }
	},
	created() {
        onNovaTarefa.$on("nova-tarefa", (nome) => {
            this.nova_tarefa(nome)
        })

        onToggleTarefa.$on("toggle-tarefa", (nome) => {
            this.toggle_tarefa(nome)
        })
        
		onDelTarefa.$on("del-tarefa", (nome) => {
            this.del_tarefa(nome)
        })
        
		onUpdateBarraProgresso.$on("update-barra-progresso", () => {
            this.calc_progresso()
        })
    },
    destroyed() {
        onNovaTarefa.$off("nova-tarefa")
        onToggleTarefa.$off("toggle-tarefa")
        onDelTarefa.$off("del-tarefa")
        onUpdateBarraProgresso.$off("update-barra-progresso")
    }
}
</script>


<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		flex: 1;
		flex-direction: column;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
