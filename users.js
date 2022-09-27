var express = require('express');
var router = express.Router();

var { validateUserData } = require("../validation/users");

const userList = [];


/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/single', (req, res) => {

  res.json ({
    success: true,
    user: "Single User"
  })
})

router.post("/create-one", (req, res) => {
  try{
  
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const favoriteFoods = req.body.favoriteFoods;
  
        favoriteFoods.forEach(() => {});
  

  


    const userData = {
      email,
      firstName,
      lastName,
      age,
      favoriteFoods,
      fullName: firstName + lastName,
      createdAt: new Date(),
      lastModified: new Date(),
    };
  
  

    const userDataCheck = validateUserData(userData);
    
    if (userDataCheck.isValid === false) {

      throw Error(userDataCheck.message)

       res.json({
        success: false,
        message: userDataCheck.message,
      });

      return;
    };

      userList.push(userData);

      console.log("userList ", userList);

      res.json({
        success: true,
      });

    } catch (e) {
      console.log(e);
    };

      res.json({
        success: false,
        error: String(e)
      });
    
});
  

  






 module.exports = router;
