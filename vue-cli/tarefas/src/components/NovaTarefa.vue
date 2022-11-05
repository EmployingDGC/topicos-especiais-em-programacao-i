<template>
    <div class="nova-tarefa-container flex-center">
        <input
            type="text"
            @keyup.enter="add_tarefa"
        >
        <button
            class="flex-center"
            @click="add_tarefa"
        >+</button>
    </div>
</template>


<script>
import onUpdateBarraProgresso from "../events/onUpdateBarraProgresso"
import onNovaTarefa from "../events/onNovaTarefa"

export default {
    name: "NovaTarefa",
    methods: {
        add_tarefa(e) {
            const input = e.path[1].querySelector("input")

            onNovaTarefa.$emit("nova-tarefa", input.value)
            onUpdateBarraProgresso.$emit("update-barra-progresso", 1)
        }
    }
}
</script>


<style scoped>
    .nova-tarefa-container {
        width: 100%;
        height: 25px;
        padding: 20px;
    }
    
    input, button {
        height: 25px;
        padding: 5px;
        outline: none;
        border: none;
    }

    input {
        width: 500px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button {
        width: 20px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>
