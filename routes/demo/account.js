const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('demo/account', {isAccountPage: true});
});

router.use('/classes', require('./classes'));
router.use('/purchases', require('./purchases'));

module.exports = router;
