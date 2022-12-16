<template>
    <div class="usuario-lista">
        <h2>Lista de Usuários</h2>
        <ul class="lista">
            <router-link
                class="item-lista"
                to="/usuario/1"
                tag="li"
            >Usuário 1</router-link>
            <router-link
                class="item-lista"
                to="/usuario/2"
                tag="li"
            >Usuário 2</router-link>
            <router-link
                class="item-lista"
                to="/usuario/3"
                tag="li"
            >Usuário 3</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "UsuarioLista",
    components: {
        
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    
</style>
