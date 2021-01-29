<template>
    <div v-if="notes.length">
        <div v-for="note in notes" :key="note._id">
            <p>{{note.data}}</p>
            <button @click="editNote(note._id, note.data)">Редактировать</button>
            <button @click="deleteNote(note._id)">Удалить</button>
        </div>
    </div>
    <span v-else>
        пока пусто...
    </span>
</template>
<script>
import {useStore} from 'vuex'
import {ref} from 'vue'

export default {
    name: "NotesList",
    setup(){
        const store = useStore();
        store.dispatch('Note/ajaxGetNotes');

        const notes = ref(store.getters['Note/allNotes']);
        const editNote = (id, data) => {
            store.dispatch('Note/ajaxUpdateNote', {id, data});
        }
        const deleteNote = (id) => {
            store.dispatch('Note/ajaxDeleteNote', id);
        }

        return {notes, editNote, deleteNote}
    }
}
</script>
<style lang="css">
    
</style>