import Vue from 'vue'
import App from './App.vue'

Vue.directive("destaque", {
	// será chamado quando aplicar a diretiva ao elemento
	bind(el, binding, vnode) {
		// el -> o elemento em que está aplicando a diretiva

		// binding.value -> valor que será passado na diretiva
		
		// binding.arg -> valor que será obitido pelo :nome_arg

		// binding.modifiers -> armazena os modificadores passados na diretiva

		if (binding.modifiers["atrasar"]) {
			atraso = 5000
		}

		setTimeout(() => {
			if (binding.arg == "texto") {
				el.style.color = binding.value
			}
	
			else if (binding.arg == "fundo") {
				el.style.backgroundColor = binding.value
			}
		}, atraso)
	},
	inserted() {

	},
	update() {

	},
	componentUpdated() {

	},
	unbind() {

	}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
