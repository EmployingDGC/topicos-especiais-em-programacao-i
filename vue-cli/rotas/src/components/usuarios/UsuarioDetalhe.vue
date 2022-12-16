<template>
    <div class="usuario-detalhe">
        <h2>Dados do Usuário</h2>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <!-- <router-link
            :to="`/usuario/${id}/editar`"
            primario
            tag="button"
        >Editar</router-link> -->
        <router-link
            :to="{name: 'editar-usuario', params, query, hash}"
            primario
            tag="button"
        >Editar</router-link>
    </div>
</template>

<script>
export default {
    name: "UsuarioDetalhe",
    props: ["id"],
    components: {
        
    },
    data() {
        return {
            params: {
                id: this.id
            },
            query: {
                completo: true,
                lingua: "pt-br"
            },
            hash: "#rodape"
        }
    }
}
</script>

<style scoped>
    button[primario] {
        margin-bottom: 2px;
    }
</style>
