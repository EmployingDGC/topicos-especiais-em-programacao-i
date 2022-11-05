<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TarefasGrid :tarefas="tarefas"/>
	</div>
</template>

<script>
import TarefasGrid from './components/TarefasGrid.vue';

export default {
	name: "App",
	components: {
		TarefasGrid
	},
	data: () => ({
		tarefas: [
			{nome: "Teste1", pendente: false},
			{nome: "Teste2", pendente: true},
		]
	})
}
</script>


<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
