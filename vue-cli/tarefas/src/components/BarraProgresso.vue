<template>
    <div class="container-progresso">
        <span
            class="barra-progresso"
            :style="{width: `${progresso}%`}"
        >
            <span
                class="valor-progresso"
            >
                {{ progresso >= 2 ? `${progresso}%` : "" }}
            </span>
        </span>
        
    </div>
</template>


<script>
export default {
    name: "BarraProgresso",
    props: ["progresso"]
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
