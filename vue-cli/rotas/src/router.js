import Vue from "vue"
import Router from "vue-router"

import Menu from "./components/templates/Menu.vue"
import MenuAlt from "./components/templates/MenuAlt.vue"
import Inicio from "./components/Inicio.vue"
import Usuario from "./components/usuarios/Usuario.vue"
import UsuarioDetalhe from "./components/usuarios/UsuarioDetalhe.vue"
import UsuarioEditar from "./components/usuarios/UsuarioEditar.vue"
import UsuarioLista from "./components/usuarios/UsuarioLista.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu
            },
            name: "inicio"
        }, {
            path: "/usuario",
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlt
            },
            children: [
                {
                    path: ":id",
                    component: UsuarioDetalhe,
                    props: true
                }, {
                    path: ":id/editar",
                    component: UsuarioEditar,
                    props: true,
                    name: "editar-usuario"
                }, {
                    path: "/",
                    component: UsuarioLista,
                    name: "lista-usuario"
                }
            ]
        }, {
            path: "*",
            redirect: "/"
        }
    ],
    scrollBehavior(to, from, save_position) {
        from
        
        if (save_position) {
            return save_position
        }

        if (to.hash) {
            return {
                selector: to.hash
            }
        }

        return {
            x: 0,
            y: 0
        }
    }
})
