<template>
    <div class="tarefas-grid">
        <div
            v-if="tarefas.length"
        >
            <Tarefa
                v-for="t in tarefas"
                :tarefa="t"
                :key="t.nome"
            />
        </div>
        <p v-else>Sua vida está em dia</p>
    </div>
</template>

<script>
import Tarefa from './Tarefa.vue';

export default {
    name: "TarefasGrid",
    components: {
        Tarefa
    },
    props: {
        tarefas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .tarefas-grid {
        display: flex;
        flex-wrap: wrap;
    }
</style>
