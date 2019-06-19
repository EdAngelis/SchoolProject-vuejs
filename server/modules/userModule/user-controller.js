const router = require('express').Router();
const repository = require('./user-repositorio')
const userSchema = require('./user-model')

router.get('/lista-de-users', async (req, res, next)=>{
  
  const usersList = await userSchema.find()
  res.send(usersList)
});

router.post('/add-users', async (req, res, next)=>{

  await repository.addUser(req.body)
  res.json({msg: 'User Created'});
});

router.post('/delete-user', async (req, res, next)=>{
  const userToDelete = await userSchema.findByIdAndDelete({_id: req.body._id})
    .then(result => {
      res.json({msg: 'User Deleted'});
    }).catch(err => {
      res.json({msg:'Problem When try delete.'})
    })
  
})
module.exports = router;