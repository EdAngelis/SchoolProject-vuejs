const router = require('express').Router();
const heroeSchema = require('../models/heroe-models');

router.post('/add-heroe', async (req, res, next) => {
  const newHeroe = await new heroeSchema(req.body);
  console.log(req.body);

    await newHeroe.save()
      .then(result => {
          res.send({msg: 'Heroe Salved'})
      })
});
router.get('/get-heroes', async (req, res, next) => {
  await heroeSchema.find()
   .then(data => {
     res.send(data)
   })
});
router.post('/edit-heroes', async (req, res, next) => {
  console.log(req);
  
});
module.exports = router;

