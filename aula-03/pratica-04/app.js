new Vue({
	el: '#desafio',
	data: {
		aplicar_destaque: true,
		aplicar_css_4: "false",
		input_css_4: "",
		input_css_5: {
			width: "150px",
			height: "150px"
		},
		cor_5: "",
		input_css: "",
	},
	watch: {
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicar_destaque = !this.aplicar_destaque
			}, 3000)
		},
		iniciarProgresso() {

		},
		f_aplicar_css_4(e) {
			this.aplicar_css_4 = e.target.value == 'true'
		}
	}
})
