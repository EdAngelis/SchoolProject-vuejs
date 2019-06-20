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
router.put('/edit-heroes', async (req, res, next) => {
  console.log(req.body);
  await heroeSchema.findByIdAndUpdate({_id: req.body.id})
   .then((result) => {
     console.log(result);     
     result.description = req.body.text
     result.save()
      .then((result) => {
        res.send('Heroe Edited') 
      }).catch((err) => {
        res.send('Problem trying to update')
      });
   }).catch((err) => {
      console.log('Heroe not found');
      
   });
});
router.delete('/delete-heroe/:id', async (req, res, next) => {
  await heroeSchema.findByIdAndDelete({_id: req.params.id})
    .then(data => {
      res.send("Usuario Deletado")
    }).catch(err => {
      res.send("Não foi possível deletar")
    })
  
})
module.exports = router;

