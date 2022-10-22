<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
import event_selecionar_usuario from "../events/onSelecionarUsuario"

export default {
    data() {
        return {
            usuario: null
        }
    },
    created() {
        /*
            Depois que o componente for criado, ele irá começar a escutar o evento
            (onSelecionarUsuario) e quando esse evento ocorer será executada a função
        */
        event_selecionar_usuario.$on("onSelecionarUsuario", (usuario) => {
            this.usuario = usuario
        })
    },
    destroyed() {
        /*
            Depois que o componente for destruido, ele irá parar de escutar o evento
            (onSelecionarUsuario)
        */
        event_selecionar_usuario.$off("onSelecionarUsuario")
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
