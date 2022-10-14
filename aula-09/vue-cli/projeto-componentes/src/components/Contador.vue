<template>
  <div class="contador">
    <h1>Contadores</h1>
    <span>{{ contador }}</span>
		<button @click="adicionar()">+</button>
		<button @click="diminuir()">-</button>
  </div>
</template>

<script>
	export default {
		name: 'Contador',
		data() {
      return {
        contador: 0
      }
    },
		methods: {
			adicionar() {
				this.contador += 1
			},
			diminuir() {
				this.contador -= 1
			}
		}
	}
</script>

<style>
	span {
		border-bottom: 1px solid #ccc;
		height: 30px;
		padding: 5px 25px;
		font-size: 2rem;
	}

	button {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		background-color: coral;
		color: white;
		margin-left: 10px;
	}
</style>
