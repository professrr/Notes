<template>
    <form @submit.prevent="createNote">
        <input v-model="data" type="text" placeholder="Добавьте заметку">
        <button>Сохранить</button>
    </form>
</template>
<script>
import {useStore} from 'vuex'
import {ref} from 'vue'

export default {
    setup() {
        const store = useStore();
        const data = ref('');

        const createNote = () => {
            store.dispatch('Note/ajaxCreateNote', data.value);
        }

        return {data, createNote}
    }
}
</script>
<style lang="css">
    
</style>