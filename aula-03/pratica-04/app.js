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
		progress: 0,
		cor_5: "",
		input_css: "",
	},
	computed: {
		progress_bar() {
			return {
				"background-color": "#275d27",
				"height": "20px",
				"display": "flex",
				"justify-content": "center",
				"align-items": "center",
				"color": "white",
				"width": `${this.progress}%`
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicar_destaque = !this.aplicar_destaque
			}, 3000)
		},
		iniciarProgresso() {
			if (this.progress == 0) {
				setInterval(() => {
					if (this.progress == 100) {
						this.progress = 0
					}

					this.progress += 1
				}, 200)
			}
		},
		f_aplicar_css_4(e) {
			this.aplicar_css_4 = e.target.value == 'true'
		}
	}
})
