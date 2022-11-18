<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<Rotulo nome="Nome:">
					<input type="text" v-model.lazy.trim="usuario.nome">
				</Rotulo>
				<Rotulo nome="Sobrenome:">
					<input type="text" v-model.lazy.trim="usuario.sobrenome">
				</Rotulo>
				<!-- Email -->
				<Rotulo nome="E-mail:">
					<input type="email" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Senha:">
					<input type="password" v-model.lazy.trim="usuario.senha">
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados?">
					<Escolha v-model="armazena_dados" />
				</Rotulo>
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<hr>
				<button @click.prevent="cadastrar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<Rotulo
					v-for="(u, i) in usuarios"
					:key="i"
					:nome="`Usuario ${i + 1}:`"
				>
					<NomeCompleto :nome="u.nome" :sobrenome="u.sobrenome"/>
					<span>{{ u.email }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha, NomeCompleto },
	data() {
		return {
			usuario: {
				nome: null,
				sobrenome: null,
				email: null,
				senha: null,
			},
			usuarios: [],
			submetido: false,
			armazena_dados: false
		}
	},
	methods: {
		cadastrar() {
			if (this.armazena_dados) {
				this.submetido = true
			}

			this.usuarios.push({...this.usuario})

			this.usuario.nome = null
			this.usuario.sobrenome = null
			this.usuario.email = null
			this.usuario.senha = null
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
