const express = require('express')

const router = express.Router()

const Post = require('../models/post')

router.get('/adm', async (req, res) => {
    try {
        let posts = new Post()
        res.status(200).render('pages/adm', { posts })
    } catch (err) {
        res.status(500).render('pages/error', { err: 'Erro ao carregar o formulário'})
    }
})

router.post('/adm', async (req, res) => {
    let content  = req.body
    let post = new Post( { content } )
    

    try {
        await post.save()
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.status(422).render('pages/adm' )
    }
})


module.exports = router