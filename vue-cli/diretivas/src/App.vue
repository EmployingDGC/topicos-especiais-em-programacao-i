<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-destaque:fundo.atrasar="cor">Usando diretivas personalizadas</p>
		<p v-destaque:texto="cor">Usando diretivas personalizadas</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'yellow'">Usando diretivas personalizadas</p>
		<p v-destaque-local:texto="'yellow'">Usando diretivas personalizadas</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="'yellow'">Usando diretivas personalizadas</p>
		<p v-destaque-local:texto.atrasar="'yellow'">Usando diretivas personalizadas</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="param_alternar">Usando diretivas personalizadas</p>
		<p v-destaque-local:texto.atrasar="'yellow'">Usando diretivas personalizadas</p>
		
		<!-- <p v-teste:arg.modificador1.modificador2="cor"
		>Usando diretivas personalizadas</p> -->
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {  },
	directives: {
		"destaque-local": {
			bind(el, binding, vnode) {
				const aplicar_cor = (cor) => {
					if (binding.arg == "texto") {
						el.style.color = cor
					}
			
					else if (binding.arg == "fundo") {
						el.style.backgroundColor = cor
					}
				}

				let atraso = 0

				if (binding.modifiers["atrasar"]) {
					atraso = binding.value.atraso || 0
				}

				const cor_1 = binding.value.cor_1 || binding.value
				const cor_2 = binding.value.cor_2 || "coral"

				let cor_atual = cor_1

				setTimeout(() => {
					if (binding.modifiers["alternar"]) {
						setInterval(() => {
							cor_atual = cor_atual == cor_1 ? cor_2 : cor_1
							aplicar_cor(cor_atual)
						}, 1000)
					}
					else {
						aplicar_cor(binding.value)
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: 'red',
			param_alternar: {
				cor_1: "green",
				cor_2: "lime",
				atraso: 2000,
			}
		}
	}
}
</script>

<style>

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 3rem;
	display: flex;
	flex-direction: column;
}
</style>
