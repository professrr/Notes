import api from '../../api'

const Note = {
    namespaced: true,
    state: () => ({
        notes: []
    }),
    mutations: {
        appendNote(state, note) {
            state.notes.push(note);
        },
        deleteNote(state, id) {
            const removeIndex = state.notes.map(note => note._id).indexOf(id);
            state.notes.splice(removeIndex, 1);
        },
        updateNote(state, id, data) {
            const note = state.notes.find(note => note._id === id);
            Object.assign(note, data);
        },
    },
    actions: {
        ajaxGetNotes(ctx, payload = {}) {
            api.get('/notes', payload).then(response => {
                response.data.data.forEach(note => {
                    ctx.commit('appendNote', note)
                });
            })
        },
        ajaxCreateNote(ctx, data) {
            api.post('/notes', {data}).then(response => {
                ctx.commit('appendNote', response.data.data)
            })
        },
        ajaxDeleteNote(ctx, id) {
            api.post('/notes/delete', {id}).then(() => {
                ctx.commit('deleteNote', id)
            })
        },
        ajaxUpdateNote(ctx, {id, data}) {
            api.post('/notes/update', {id, data}).then(() => {
                ctx.commit('updateNote', id, data)
            })
        },
    },
    getters: {
        allNotes(state) {
            return state.notes
        }
    }
}

export default Note;