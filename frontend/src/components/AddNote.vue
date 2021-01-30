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
    form {
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    form input {
        flex: 8;
        margin-right: 20px;
        height: 40px;
        border: none;
        border-radius: 10px;
        padding-left: 20px;        
    }
    form input::placeholder {
        font-size: 16px;
        color: #888888;
    }
    form button {
        flex: 2;
        font-size: 16px;
        height: 40px;
        padding: 5px 15px 5px 15px;
        border: none;
        border-radius: 10px;
        background: rgb(40, 150, 0);
        color: #FFFFFF;
    }
    form button:hover {
        background: #33C200;
        cursor: pointer;
    }
</style>