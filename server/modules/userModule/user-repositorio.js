const userSchema = require('./user-model')

exports.addUser = async (user) => {
    const newUser = new userSchema(user)
    await newUser.save()
    .then(res => {
        console.log('User Salve')
    }).catch(err => {
        console.log('Problem when trying salve')
    })

}