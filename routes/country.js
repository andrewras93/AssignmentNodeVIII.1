const worldControllers = require('../controllers/worldControllers');
const express = require('express');
const router = express.Router();

/* GET country form page */
router.get('/', function(req, res, next) {
    res.render('countryData');
});

/* INSERT ONE country */
router.post('/', async(req, res, next) => {
    try {
        await worldControllers.insertCountry(req.body);
        res.render('countryData');
    } catch (err) {
        res.send(err);
    }
});

/* READ ONE country */
router.get('/:country', async(req, res, next) => {    
    try {
        let country = await worldControllers.retrieveCountry(req.params.country);
        res.render('country', {object: country[0]});
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
