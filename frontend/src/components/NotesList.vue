<template>
    <transition-group name="list-item" tag="div" class="notes-list" v-if="notes.length">
            <div class="list-item" v-for="note in notes" :key="note._id"> 
                <router-link v-if="!note.edit_toggle" :to="{name: 'Note', params: {id: note._id}}">{{note.data}}</router-link>
                <textarea v-else v-model="note.data"></textarea>
                <div class="notes-list-btns">
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
    </transition-group>
    <span class="notes-list-empty" v-else>
        пока пусто...
    </span>
</template>
<script>
import {useStore} from 'vuex'
import {ref} from 'vue'
import delete_svg from '@/assets/delete.svg'
import edit_svg from '@/assets/edit.svg'
import ok_svg from '@/assets/ok.svg'

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

        return {notes, switchEditMode, editNote, deleteNote, delete_svg, edit_svg, ok_svg}
    }
}
</script>
<style lang="css">
    .list-item {
      transition: all 0.5s;

    }
    .list-item-enter, .list-item-leave-to { 
      opacity: 0;
      transform: scale(0);
    }
    .list-item-enter-to {
      opacity: 1;
      transform: scale(1);
    }

    .list-item-leave-active {
      position: absolute;
    }

    .list-item-move {
      opacity: 1;
      transition: all 0.5s;
    }

    .notes-list {
        width: 100%;
    }

    .list-item  {
        display: flex;
        flex-direction: row;
        background: #FFFFFF;
        padding: 10px 20px 10px 20px;
        margin-top: 30px;
        border-radius: 10px;
        min-height: 60px;
        position: relative;
    }

    .list-item textarea {
        width: 100%;
        height: 100%;
    }

    .list-item a{
        color: #000000;
        text-decoration: none;
        font-size: 16px;
    }

    .notes-list-btns {
        top: -20px;
        right: -10px;
        margin-left: auto; 
        margin-right: 0;
        position: absolute;
    }
    
    .notes-list-edit-btn {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 15px;
        background: #8D8D8D;
        cursor: pointer;
    }

    .notes-list-save-btn {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 15px;
        background: #487BFF;
        cursor: pointer;
    }

    .notes-list-delete-btn {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 15px;
        background: #F20000;
        cursor: pointer;
    }

</style>