const Note = require('../models/notesModel');
const AppError = require('../utils/appError');

exports.notes = async (req, res, next) => {
    try {
        const notes = await Note.find();

        res.status(200).json({
            status: 'success',
            data: notes
        });
    } catch(err) {
        next(err);
    }
}

exports.createNote = async (req, res, next) => {
    try {
        const {data} = req.body;

        if(!data) {
            throw new AppError(404, 'fail', 'Параметр data обязателен')
        }

        const note = await Note.create({data});

        res.status(201).json({
            status: 'success',
            data: note
        });
    } catch(err) {
        next(err)
    }
}

exports.updateNote = async (req, res, next) => {
    try {
        const {data, id} = req.body;

        if(!data || !id) {
            throw new AppError(404, 'fail', 'Параметры data и id обязательны')
        }

        const note = await Note.updateOne({_id: id}, {"$set": {data}});

        if(!note.n) {
            throw new AppError(404, 'fail', 'Note не найден и не обновлен')
        }

        res.status(200).json({
            status: 'success',
            data: note
        });
    } catch(err) {
        next(err);
    }
}
exports.deleteNote = async (req, res, next) => {
    try {
        const {id} = req.body;

        if(!id) {
            throw new AppError(404, 'fail', 'Параметр id обязателен')
        }

        const note = await Note.deleteOne({_id: id});

        if(!note.n) {
            throw new AppError(404, 'fail', 'Note не найден и не удален')
        }

        res.status(204).json({
            status: 'success',
            data: note
        });

    } catch(err) {
        next(err);
    }
}