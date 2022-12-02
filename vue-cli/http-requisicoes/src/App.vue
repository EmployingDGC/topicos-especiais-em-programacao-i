<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
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
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
const db_name = "usuarios.json"

export default {
	data() {
		return {
			usuario: {
				nome: null,
				email: null
			},
			usuarios: []
		}
	},
	methods: {
		salvar() {
			const usuario = this.usuario
			if (usuario.nome && usuario.email) {
				this.$http.post(
					db_name,
					usuario
				).then(() => {
					usuario.nome = null
					usuario.email = null
				})
			}
		},
		obter_usuarios() {
			this.$http.get(db_name).then(
				(res) => {
					this.usuarios = res.data
					console.log(this.usuarios)
				}
			)
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
