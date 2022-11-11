<template>
	<div id="app">
		<Menu />
		<Main />
		<Side />
	</div>
</template>


<script>
import Menu from "./components/Menu.vue"
import Main from "./components/Main.vue"
import Side from "./components/Side.vue"

export default {
	name: "App",
	components: {
		Menu,
		Main,
		Side
	},
	data() {
		return {}
	},
	methods: {}
}
</script>


<style scoped>
	#app {
		display: flex;
		justify-content: center;
		background-color: black;
		min-height: 100vh;
	}
</style>
