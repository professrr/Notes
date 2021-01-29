const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.notes)
router.post('/', notesController.createNote);
router.post('/update', notesController.updateNote);
router.post('/delete', notesController.deleteNote);

module.exports = router;