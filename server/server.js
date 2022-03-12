const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportLocalMongoose = require('passport-local-mongoose')
const bcypt = require('bcrypt')
const noOfSaltRounds = 10

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(process.env.MONGOOSE_CONNECT, { useNewUrlParser: true })

mongoose.connect(process.env.MONGOOSE_CONNECT)
const userSchema = new mongoose.Schema({
  email: String,
  password: String
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false, { message: 'User not found.' })
      }

      if (!user.verifyPassword(password)) {
        return done(null, false, {
          message: 'Invalid password.'
        })
      }

      return done(null, user)
    })
  })
)

app.get("/",function(req,res){
  res.send("Hello");
});

app.post('/login', function (req, res) {
  const email1 = req.body.email
  const password1 = req.body.password

  User.findOne({ email: email1 }, function (err, foundUser) {
    if (err) {
      console.log(err)
    } else {
      if (foundUser) {
        bcypt.compare(password1, foundUser.password, function (err, result) {
          if (result == true) {
            return res.send({
              message: 'Successfully authenticated',
              user: foundUser
            })
          }
        })
      } else {
        return res.send({
          message: 'Not signed up',
          user: foundUser
        })
      }
    }
  })
})

app.post('/signup', function (req, res) {
  bcypt.hash(req.body.password, noOfSaltRounds, function (err, hash) {
    const newuser = new User({
      email: req.body.email,
      password: hash
    })
    User.findOne({ email: newuser.email }, function (err, user) {
      if (!user) {
        newuser.save(function (err) {
          if (err) {
            res.send(err)
            console.log(err)
          } else {
            res.send({ message: 'User signup successful' })
          }
        })
      } else {
        res.send({ message: 'Already exists.' })
      }
    })
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(process.env.PORT || 5000, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Server successfully connected')
  }
})
