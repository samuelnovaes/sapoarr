const express = require('express')
const routerfy = require('routerfy')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('static'))
app.use(routerfy('routes'))

app.listen(8080, () => {
	console.log('Abra isso no teu browser: http://localhost:8080')
})
