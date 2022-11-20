const express = require('express');
const {createAdmin, getAdmins, loginAdmin} = require('../controllers/Adminlogin');
const router = express.Router();

router.get('/admins',getAdmins);
router.post('/admin',createAdmin);
router.post('/admin/login',loginAdmin);



module.exports = router;