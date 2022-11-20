const express = require('express');
const { createRoutine ,getRoutine,delRoutine,getRoutineByDay} = require('../controllers/Routine');
const router = express.Router();

router.get('/routine',getRoutine);
router.get('/routine/:batch/:section/:day',getRoutineByDay);
router.post('/routine',createRoutine);
router.delete('/routine/:id',delRoutine);

module.exports = router;