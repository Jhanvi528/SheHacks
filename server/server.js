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

app.use(bodyParser.json())
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

const userSchema = new mongoose.Schema({
  email: String,
  password: String
})

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  item: String,
  price: Number,
  cat: String,
  desc: String,
  img: String
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', itemSchema)

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
              user: foundUser
            })
          }
        })
      } else {
        return res.send({
          user: null
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
            res.json({ data: 0 })
            console.log(err)
          } else {
            res.json({ data: 1 })
          }
        })
      } else {
        res.json({ data: 0 })
      }
    })
  })
})

count = 0
app.post('/shopkeeper', function (req, res) {
  count = count + 1

  const newitem = new Product({
    id: count,
    name: req.body.name,
    location: req.body.location,
    price: req.body.price,
    cat: req.body.cat,
    desc: req.body.desc,
    item: req.body.item,
    img: req.body.img
  })
  newitem.save(function (err) {
    if (err) {
      console.log(err)
    }
  })
})

app.get('/clothing', function (req, res) {
  Product.find({ cat: 'clothing' }, function (err, result) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err)
    }
  })
})

app.get('/grocery', function (req, res) {
  Product.find({ cat: 'grocery' }, function (err, result) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err)
    }
  })
})

app.get('/accessories', function (req, res) {
  Product.find({ cat: 'accessories' }, function (err, result) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err)
    }
  })
})

app.get('/electronics', function (req, res) {
  Product.find({ cat: 'electronics' }, function (err, result) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err)
    }
  })
})
app.post('/productfind', function (req, res) {
  const find_id = req.body.id
  Product.findOne({ id: find_id }, function (err, result) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err)
    }
  })
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(process.env.PORT || 5000, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Server successfully connected')
  }
})
