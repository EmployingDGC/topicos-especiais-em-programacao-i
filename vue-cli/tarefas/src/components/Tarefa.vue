<template>
    <div
        :class="classe_estado"
        @click="toggle_tarefa"
    >
        <span
            class="xis flex-center"
            @click="del_tarefa"
        >X</span>
        <h1>{{ tarefa.nome }}</h1>
    </div>
</template>


<script>
import onUpdateBarraProgresso from "../events/onUpdateBarraProgresso"
import onToggleTarefa from "../events/onToggleTarefa"
import onDelTarefa from "../events/onDelTarefa"

export default {
    name: "Tarefa",
    props: ["tarefa"],
    computed: {
        classe_estado() {
            return {
                tarefa: true,
                "flex-center": true,
                pendente: this.tarefa.pendente,
                feito: !this.tarefa.pendente
            }
        }
    },
    methods: {
        toggle_tarefa() {
            onToggleTarefa.$emit("toggle-tarefa", this.tarefa.nome)
            onUpdateBarraProgresso.$emit("update-barra-progresso")
        },
        del_tarefa() {
            onDelTarefa.$emit("del-tarefa", this.tarefa.nome)
            onUpdateBarraProgresso.$emit("update-barra-progresso")
        }
    }
}
</script>


<style scoped>
    .xis {
        position: absolute;
        top: 5px;
        right: 0;
        color: #ddd;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: .9rem;
        font-weight: 600;
    }
    .xis:hover {
        color: red;
        cursor: default;
    }
    
    .tarefa {
        position: relative;
        box-sizing: border-box;
        width: 300px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        margin-bottom: 10px;
    }

    .pendente {
        border-left: 12px solid #b73229;
        background-color: #f44336;
    }

    .pendente .xis {
        background-color: #b73229;
    }

    .feito {
        color: #ddd;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through lime;
    }

    .feito .xis {
        background-color: #0a8f08;
    }
</style>
