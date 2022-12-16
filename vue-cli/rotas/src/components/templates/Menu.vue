<template>
    <nav class="menu">
        <ul>
            <router-link
                to="/"
                tag="li"
                active-class="active"
                exact
            ><a>Inicio</a></router-link>
            <router-link
                to="/usuario/10"
                tag="li"
                active-class="active"
            ><a>Usuario 1</a></router-link>
            <router-link
                to="/usuario/20"
                tag="li"
                active-class="active"
            ><a>Usuario 2</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Menu",
    components: {
        
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    
</style>

