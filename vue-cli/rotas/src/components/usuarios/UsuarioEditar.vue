<template>
    <div class="usuario-editar">
        <h2>Editar Usuário</h2>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <p><strong>Completo: </strong>{{ query.completo ? "sim" : "não" }}</p>
        <p><strong>Língua: </strong>{{ query.lingua }}</p>

        <div id="rodape">
            <h3>Curso de Vue</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolor autem ipsa cum hic velit ut omnis, explicabo error repellendus beatae commodi aperiam debitis reiciendis quam adipisci fuga vel enim ullam aliquam inventore iste illo! Magnam asperiores eaque ab explicabo consectetur totam vero ut molestiae saepe laudantium libero dignissimos perferendis rerum deserunt ad illo inventore ipsum odit quam, eius similique necessitatibus error ipsam. Debitis autem sequi ex aperiam repellat aspernatur aliquid optio, expedita harum voluptates veniam earum at, fugiat temporibus animi quidem minus. Nobis at quos expedita blanditiis, dolorem cupiditate nemo distinctio magnam deserunt placeat eligendi molestiae quam ea saepe libero nulla maxime doloribus autem modi. Aut mollitia odit veniam deleniti eveniet dicta repellat, natus rem, distinctio sapiente debitis perferendis nesciunt consectetur quos aspernatur hic pariatur consequatur placeat atque. Non nemo provident modi, doloremque consectetur fugit sed quaerat ullam pariatur distinctio perspiciatis laboriosam ut rem eligendi, placeat similique debitis quos ipsum quam, corporis autem fuga eveniet consequuntur expedita! A ad voluptatum nihil rerum laborum aliquam voluptatibus quia suscipit aliquid corrupti dolorem magni delectus odio assumenda veritatis natus, molestias, esse dolor, cum eos. Odit rerum eaque exercitationem incidunt fuga ratione ipsum modi vero in rem quos neque architecto inventore itaque nesciunt, nostrum earum saepe recusandae aut voluptatem? Rem dolore, voluptates ea ullam animi vel dolores omnis nam praesentium debitis asperiores excepturi eum nemo autem labore voluptatem consectetur officia doloremque neque quo possimus. Ducimus repudiandae error iure doloremque voluptatibus amet eaque, ipsam recusandae sunt ut, odit saepe dicta blanditiis voluptate quisquam officia harum ad repellat sed nulla. Eligendi nam nisi ducimus iusto cupiditate sint, fugit perspiciatis alias culpa eum labore a dolor tempore unde, aperiam consequuntur laborum cumque. Iste natus ad, odio minus voluptatibus minima? Nemo dicta aspernatur fuga, debitis autem rem. Repudiandae iste voluptas dolor eos illum voluptatem suscipit debitis eius?</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UsuarioEditar",
    props: ["id"],
    components: {
        
    },
    data() {
        return {
            query: this.$route.query
        }
    }
}
</script>

<style scoped>
    p {
        max-width: 300px;
    }
</style>
