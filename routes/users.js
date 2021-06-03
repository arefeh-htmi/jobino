const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//bringing input validation
const validatingregister = require("../../validation/register");
const validatingrlogin = require("../../validation/login");

//loading User schema
const User = require("../../models/User");
router.get("/demo", (req, res) => res.json({ msg: "user api Works" }));

//will check email address if exists or not
router.post("/register", (req, res) => {
  const { errors, isValid } = validatingregister(req.body);
  // Checking Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already registered" });
    }
    //if not then will create newuser
    else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      //bcrypt is for hashing the password of the user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//login route
router.post("/login", (req, res) => {
  const { errors, isValid } = validatingrlogin(req.body);
  // Check Validation for login
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //finding user by email
  User.findOne({ email }).then(user => {
    //if no user with this email
    if (!user) {
      return res.status(400).json("No user with this email");
    }
    //checking pass
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        res.status(400).json({ password: "incorrect password" });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);
module.exports = router;
