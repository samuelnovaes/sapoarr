const router = require('express').Router()

router.post('/', (req, res) => {

	const n1 = Number(req.body.n1)
	const n2 = Number(req.body.n2)
	const texto = req.body.texto

	res.render('resultado', {
		valor: n1 + n2,
		texto: texto
	})

})

module.exports = router
