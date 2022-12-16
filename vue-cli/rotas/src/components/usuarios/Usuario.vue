<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <router-view name="menu" />
        <router-view />
        <button
            @click="ir_para_inicio"
            sucesso
        >Voltar</button>
    </div>
</template>

<script>
export default {
    name: "Usuario",
    components: {
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        ir_para_inicio() {
            // this.$router.push("/")
            this.$router.push({name: "inicio"})
        }
    }
}
</script>

<style scoped>
    
</style>

