<template>
    <div>
        <p>Note {{id}}</p> 
        <router-link :to="{ name: 'Home'}">Главная</router-link>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'

export default {
    name: "Note",
    setup() {
        const router = useRouter();
        console.log(router)
        const route = useRoute();
        const id = ref(route.params.id);
        return {id}
    }
}
</script>

<style lang="css">
    
</style>