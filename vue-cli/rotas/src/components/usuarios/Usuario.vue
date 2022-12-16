<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <button
            @click="ir_para_inicio"
            sucesso
        >Voltar</button>
    </div>
</template>

<script>
export default {
    name: "Usuario",
    props: ["id"],
    components: {
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        ir_para_inicio() {
            // this.$router.push("/")
            this.$router.push({path: "/"})
        }
    }
}
</script>

<style scoped>
    
</style>

