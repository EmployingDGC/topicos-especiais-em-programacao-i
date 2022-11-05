<template>
    <div>
        <div
            class="tarefas-grid"
            v-if="tarefas.length"
        >
            <Tarefa
                v-for="(t, i) in tarefas"
                :tarefa="t"
                :key="i"
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
    props: ["tarefas"]
}
</script>


<style scoped>
    .tarefas-grid {
        display: flex;
        flex-wrap: wrap;
    }

    .tarefas-grid :not(:last-child) {
        margin-right: 10px;
    }

    p {
        font-size: 2rem;
        font-weight: 100;
    }
</style>
