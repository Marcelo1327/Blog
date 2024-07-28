const express = require('express')

const router = express.Router()

const Post = require('../models/post')

router.get('/', async (req, res) => {
    try {
        let post = await Post.find({})
        res.status(200).render('posts/index', { post })
    } catch (err) {
        res.status(422).render('pages/error', { err: 'erro ao exibir as publicações'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        res.status(200).render('posts/show', { post })
    } catch (err) {
        res.status(422).render('pages/error', { err: 'Erro ao exibir a publicação' })
    }
})

module.exports = router