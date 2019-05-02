const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const users = ['Thiago Morais', 'Hugo Tostes', 'Dario Silva']

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

// app.use(express.json());

app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
