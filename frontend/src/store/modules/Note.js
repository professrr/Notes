const Note = {
    namespaced: true,
    state: () => ({
        notes: []
    }),
    mutations: {
        appendNote(state, note) {
            state.notes.push(note)
        }
    },
    actions: {},
    getters: {
        allNotes(state) {
            return state.notes
        }
    }
}

export default Note;