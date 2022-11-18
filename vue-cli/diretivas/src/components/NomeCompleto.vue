<template>
    <div>
        <span>{{ nome }} {{ sobrenome }}</span>
    </div>
</template>

<script>
export default {
    name: "NomeCompleto",
    props: ["nome", "sobrenome"],
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
