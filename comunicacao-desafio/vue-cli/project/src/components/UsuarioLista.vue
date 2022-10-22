<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="usuario in usuarios"
                    :key="usuario.id"
                    @click="mudar_usuario(usuario)"
                >
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import event_selecionar_usuario from "../events/onSelecionarUsuario"

export default {
    props: { usuarios: Array },
    data: () => ({
        mudar_usuario(usuario) {
            /*
                Quando a linha da tabela for precionada será emitido o evento
                (onSelecionarUsuario) e será passado para o valor do evendo a
                variável (usuario)
            */
            event_selecionar_usuario.$emit("onSelecionarUsuario", usuario)
        }
    })
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
