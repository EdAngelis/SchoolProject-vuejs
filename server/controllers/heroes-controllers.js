const router = require('express').Router();
const heroeSchema = require('../models/heroe-models');

router.post('/add-heroe', async (res, req, next) => {
      const newHeroe = await new heroeSchema(req.body);
       await newHeroe.save()
         .then(res => {
             res.send({msg: 'Heroe Created'})
         }).catch(err => {
            res.send({msg: 'Problem to create'})

         })
});

module.exports = router;

