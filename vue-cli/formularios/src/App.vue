<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model="email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio"> Web</span>
					<span class="mr-4"><input type="radio"> Mobile</span>
					<span><input type="radio"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="p">
						<option
							v-for="p in prioridades"
							:key="p.codigo"
							:value="p.codigo"
							:selected="p.codigo == '1'"
						>{{ p.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ email || default_text }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ senha || default_text }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ typeof idade || default_text }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem" style="white-space: pre-line;">
					<span>{{ mensagem || default_text }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>{{ default_text }}</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ default_text }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ p || default_text }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha || default_text }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			default_text: "???",
			email: "",
			senha: "",
			idade: 25,
			mensagem: "",
			prioridades: [
				{codigo: 1, nome: "Baixa"},
				{codigo: 2, nome: "Media"},
				{codigo: 3, nome: "Alta"},
			],
			p: 1,
			escolha: true
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
