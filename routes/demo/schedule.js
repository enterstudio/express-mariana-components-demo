const express = require('express');

const router = express.Router();

router.get('/:regionId/:locationId', (req, res) => {
    res.render('demo/schedule', {regionId: req.params.regionId, locationId: req.params.locationId});
});

module.exports = router;
