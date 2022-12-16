<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible
			v-for="m in mensagens"
			:key="m.texto"
			:variant="m.tipo"
		>
			{{ m.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input
					type="text"
					size="lg"
					v-model.trim="usuario.nome"
					placeholder="Informe o Nome."
				></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input
					type="text"
					size="lg"
					v-model.trim="usuario.email"
					placeholder="Informe o Email."
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button
				size="lg"
				variant="primary"
				@click="salvar"
			>Salvar</b-button>
			<b-button
				size="lg"
				variant="success"
				@click="obter_usuarios"
				class="ml-2"
			>Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item
				v-for="(u, i) in usuarios"
				:key="i"
			>
				<strong>Nome: {{ u.nome }}</strong><br>
				<strong>E-mail: {{ u.email }}</strong><br>
				<strong>ID: {{ i }}</strong>
				<br>
				<b-button
					variant="warning"
					size="lg"
					@click="carregar(id)"
				>Carregar</b-button>
				<b-button
					variant="danger"
					size="lg"
					class="ml-2"
					@click="excluir(id)"
				>Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
const db_name = "usuarios.json"

export default {
	data() {
		return {
			mensagens: [],
			usuario: {
				nome: null,
				email: null
			},
			id: null,
			usuarios: []
		}
	},
	methods: {
		salvar() {
			const usuario = this.usuario

			if (usuario.nome && usuario.email) {
				// this.$http.post(
				// 	db_name,
				// 	usuario
				// ).then(() => {
				// 	this.limpar_formulario()
				// })

				const metodo = this.id ? "patch": "post"
				const final_url = this.id ? `/${this.id}.json`: ".json"
				
				this.$http[metodo](`/usuarios${final_url}`, this.usuario).then(() => {
					this.limpar_formulario()
					this.mensagens.push({
						texto: "Usuário salvo com sucesso!",
						tipo: "success"
					})
				})
			} else {

			}
		},
		obter_usuarios() {
			this.$http.get(db_name).then(
				(res) => {
					this.usuarios = res.data
				}
			)
		},
		carregar(id) {
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`).then(() => {
				this.limpar_formulario()
			}).catch((e) => {
				this.limpar_formulario()
				this.mensagens.push({
					texto: `Problema para excluir: ${e}`,
					tipo: "danger"
				})
			})
		},
		limpar_formulario() {
			const usuario = this.usuario

			usuario.nome = null
			usuario.email = null
			this.id = null
			this.mensagens = []
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
