<template>
    <h1>Notes.</h1>
    <AddNote />
    <NotesList />
</template>

<script>
import AddNote from "@/components/AddNote.vue"
import NotesList from "@/components/NotesList.vue"

export default {
    name: "Note",
    components: {
        AddNote, NotesList
    }
}
</script>
<style lang="css">

</style>