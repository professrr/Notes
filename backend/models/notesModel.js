const mongoose = require('mongoose');


const notesSchema = new mongoose.Schema({
    data: {
        type: String,
        required: [true, 'Необходим data для создания Note.']
    },
    ts: {
        type: Number,
        default: Date.now(),
        required: [true, 'Необходим timestamp для создания Note.']
    },
})

// Здесь можно валидировать заметки при обновлеии или создании документа, решил убрать
// const validateData = async function (next) {
//     try {
        
//     } catch(err) {
//         next(err);
//     }
// }

// notesSchema.pre('save', validateData);
// notesSchema.pre('update', validateData);

const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;