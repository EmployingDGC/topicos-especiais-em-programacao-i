<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu /> -->
		<router-view name="menu" />
		<transition
			mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rotateOut"
		>
			<router-view />
		</transition>
	</div>
</template>

<script>
// import Menu from "./components/templates/Menu.vue"

export default {
	name: "App",
	components: {
		// Menu
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
