<template>
    <div class="one-note">
        <h2>Note.</h2>
        <h2>{{id}}</h2> 
        <div class="list-item">
            <p v-if="note && !note.edit_toggle">{{note.data}}</p>
            <textarea v-if="note.edit_toggle" v-model="note.data"></textarea>
            <span v-if="!note">не найдено такой заметки, либо она удалена :(</span>
            <div v-if="note" class="notes-list-btns">
                    <button class="notes-list-edit-btn" v-if="!note.edit_toggle" @click="switchEditMode(note)">
                        <img :src="edit_svg" width="13" height="13" alt="">
                    </button>
                    <button class="notes-list-save-btn" v-if="note.edit_toggle && note.data" @click="editNote(note)">
                        <img :src="ok_svg" width="13" height="13" alt="">
                    </button>
                    <button class="notes-list-delete-btn" @click="deleteNote(note._id)">
                        <img :src="delete_svg" width="13" height="13" alt="">
                    </button>
            </div>
        </div>
        <router-link class="back-to-home-btn" :to="{ name: 'Home'}">Главная</router-link>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref} from 'vue'
import { useRoute} from 'vue-router'
import delete_svg from '@/assets/delete.svg'
import edit_svg from '@/assets/edit.svg'
import ok_svg from '@/assets/ok.svg'

export default {
    name: "Note",
    setup() {
        const route = useRoute();
        const store = useStore();

        const id = ref(route.params.id);
        const notes = store.getters['Note/allNotes'];

        console.log(notes);
        let search_note = notes.filter(note => note._id == id.value);
        console.log(search_note);
        const note = ref(search_note.length ? search_note[0] : '');

        console.log(note);

        const switchEditMode = (note) => {
            note.edit_toggle = !note.edit_toggle;
        }
        const editNote = (note) => {
            store.dispatch('Note/ajaxUpdateNote', {id: note._id, data: note.data});
            switchEditMode(note);
        }
        const deleteNote = (id) => {
            store.dispatch('Note/ajaxDeleteNote', id);
            note.value = '';
        }

        return {id, note, switchEditMode, editNote, deleteNote, delete_svg, edit_svg, ok_svg}
    }
}
</script>

<style lang="css">
    .one-note {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .back-to-home-btn {
        padding: 10px 20px 10px 20px;
        background: #2787F5;
        border-radius: 10px;
        color: #FFFFFF;
        text-decoration: none;
        max-width: 80px;
        text-align: center;
        margin-top: 30px;
    }
</style>