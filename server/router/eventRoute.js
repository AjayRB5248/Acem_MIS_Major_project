const express = require('express');
const { getEvents, createEvent, deleteEvent,getEventById } = require('../controllers/event');
const router = express.Router();

router.get('/events',getEvents);
router.post('/event',createEvent);
router.get('/event/:id',getEventById);
router.delete('/event/:id',deleteEvent);



module.exports = router;