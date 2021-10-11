//Import Module
const express = require('express');
const created = require('./Crud/createUser');
const read = require('./Crud/readUser');
const updated = require('./Crud/updateUser');
const deleted = require('./Crud/deleteUser');

//Declaration of the instance
const router = express.Router();

//Routing
router.get('/', (req,res)=> res.end('Sono la rotto principale di User'))
router.get('/created', created);
router.get('/read', read);
router.get('/updated', updated);
router.get('/deleted', deleted);

//Export instance
module.exports = router;