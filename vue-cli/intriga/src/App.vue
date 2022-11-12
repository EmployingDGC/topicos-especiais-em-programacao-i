<template>
	<div id="app">
		<Menu />
		<Main />
		<Side :users="users.slice(-3)"/>
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
		return {
			users: [
				{id: 1, name: "Davi", login: "davi"},
				{id: 2, name: "Victor", login: "victor"},
				{id: 3, name: "Marcelo", login: "marcelo"},
				{id: 4, name: "Andrico", login: "andrico"},
				{id: 5, name: "Mayara", login: "mayara"},
				{id: 6, name: "Leo Alporges", login: "leo_alporges"},
				{id: 7, name: "Gabriel Marrochi", login: "gabriel_marrochi"}
			]
		}
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
