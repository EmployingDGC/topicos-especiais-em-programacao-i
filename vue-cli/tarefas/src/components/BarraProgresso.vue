<template>
    <div class="container-progresso">
        <span
            class="barra-progresso"
            :style="{width: `${progresso}%`}"
        >
            <span
                class="valor-progresso"
            >
                {{ progresso ? `${progresso}%` : "" }}
            </span>
        </span>
        
    </div>
</template>


<script>
import onUpdateBarraProgresso from "../events/onUpdateBarraProgresso"

export default {
    name: "BarraProgresso",
    props: ["tarefas"],
    data() {
        return {
            progresso: 0
        }
    },
    methods: {
        calc_progresso() {
            let count_not_pendentes = 0

            for (const i in this.tarefas) {
                if (!this.tarefas[i].pendente) {
                    count_not_pendentes += 1
                }
            }

            this.progresso = Math.trunc((count_not_pendentes * 100) / this.tarefas.length)
        }
    },
    created() {
        onUpdateBarraProgresso.$on("update-barra-progresso", () => {
            this.calc_progresso()
        })
    },
    destroyed() {
        onUpdateBarraProgresso.$off("update-barra-progresso")
    }
}
</script>


<style scoped>
    .container-progresso {
        display: flex;
        width: 80%;
        margin-bottom: 10px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 8px;
    }
    
    .barra-progresso {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        background-color: darkgreen;
        height: 100%;
        border-radius: 8px;
        padding: 8px;
    }
    
    .valor-progresso {
        position: absolute;
        font-weight: 300;
    }
</style>
