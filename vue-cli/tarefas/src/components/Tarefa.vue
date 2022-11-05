<template>
    <div :class="classe_estado">
        <h1>{{ tarefa.nome }}</h1>
    </div>
</template>

<script>
export default {
    name: "Tarefa",
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    },
    computed: {
        classe_estado: () => ({
            tarefa: true,
            pendente: this.tarefa.pendente,
            feito: !this.tarefa.pendente
        })
    }
}
</script>


<style scoped>
    .tarefa {
        box-sizing: border-box;
        width: 300px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pendente {
        border-left: 12px solid #b73229;
        background-color: #f44336;
    }

    .feito {
        color: #ddd;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through lime;
    }
</style>