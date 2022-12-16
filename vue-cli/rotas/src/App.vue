<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
	components: {
		
	},
	data() {
		return {
			
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
