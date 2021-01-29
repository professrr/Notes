<template>
    <div v-if="notes.length">
        <div v-for="note in notes" :key="note._id">
            <router-link v-if="!note.edit_toggle" :to="{name: 'Note', params: {id: note._id}}">{{note.data}}</router-link>
            <textarea v-else v-model="note.data"></textarea>
            <button v-if="!note.edit_toggle" @click="switchEditMode(note)">Редактировать</button>
            <button v-else @click="editNote(note)">Сохранить</button>
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

        const switchEditMode = (note) => {
            note.edit_toggle = !note.edit_toggle;
        }
        const editNote = (note) => {
            store.dispatch('Note/ajaxUpdateNote', {id: note._id, data: note.data});
            switchEditMode(note);
        }
        const deleteNote = (id) => {
            store.dispatch('Note/ajaxDeleteNote', id);
        }

        return {notes, switchEditMode, editNote, deleteNote}
    }
}
</script>
<style lang="css">
    
</style>