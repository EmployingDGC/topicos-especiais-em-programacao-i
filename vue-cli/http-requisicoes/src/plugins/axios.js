import Vue from "vue"

import axios from "axios"

Vue.use({
    install(vue) {
        vue.prototype.$http = axios.create({
            baseURL: "https://vue-projeto-4a789-default-rtdb.firebaseio.com/",
            headers: {
                get: {
                    "Authorization": "abc123"
                }
            }
        })
        Vue.prototype.$http.interceptors.request.use(
            (config) => {
                console.log(config.method)
                return config
            },
            (error) => {
                Promise.reject(error)
            }
        )
        Vue.prototype.$http.interceptors.response.use(
            (res) => {
                const lista = []

                for (let c in res.data) {
                    const data = res.data[c]

                    lista.push({
                        id: c,
                        nome: data.nome,
                        email: data.email
                    })
                }

                res.data = lista

                return res
            },
            (error) => {
                Promise.reject(error)
            }
        )
    }
})
