const User = require('../models/user.js')
class AuthController {
  static createUser = async (req, res) => {
    try {
      console.log(req.body)
      const user = new User(req.body);
      await user.save()
      if(user) {
        res.status(200).send({
          status: 200,
          user
        })
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: error.message
      })
    }
  }

  static getAllUser = async (req, res) => {
      const _id = req.params.id // retrieve the id provided 
      console.log(_id)
      User.findById(_id).then((user) => {
      if (!user) {
            return res.status(404).send()
      } 
      res.send(user)
    }).catch((e) => {
        res.status(500).send({
          status: 500,
          message: e.message
        })
    })
  }

  static updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,        
                                                  req.body, 
                                                    { new: true,
                                                    runValidators: true
                                                    }
                                                  ) 

      if (!user) {
        return res.status(404).send()
      } else {
        res.send(user)
      }
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: e.message
    })
  }
      
  }

  static deleteUser = async (req, res) => {
    try {
     const user = await User.findByIdAndDelete(req.params.id) 
 
     if (!user) {
         return res.status(404).send({
                                      message: "User Not Found"
                                     })
      } 
     res.send(user)
   } catch (e) {
     res.status(500).send({
                          status: 500,                          
                          message: e.message
                         })
   }
}
  
}
module.exports = AuthController