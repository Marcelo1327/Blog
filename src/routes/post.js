const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.get('/', async (req, res) => {

    try {
        let post = await Post.find({})
        res.status(200).render('pages/index', { post })
    } catch (err) {
        res.status(422).render('pages/error', { err: 'erro ao exibir as publicações'})
    }
})

router.get('/adm', async (req, res) => {
    try {
        let post = await Post.find({})
        res.status(200).render('pages/adm', { post })
    } catch (err) {
        res.status(500).render('pages/error', { err: 'erro ao exibir as publicações'})
    }


    
})

router.get('/adm/new', async (req, res) => {

    try {
        let post = new Post()
        res.status(200).render('posts/new', { post: post })
    } catch (err) {
        res.status(500).render('pages/error', { err: 'Erro ao carregar o formulário'})
      
    }
})

router.post('/adm/new', async (req, res) => {
    let {content} = req.body.post
    let post = new Post( {content } )
    

    try {
        await post.save()
        res.status(201).redirect('/adm')
    } catch (err) {
        res.status(500).render('pages/error', {err: 'Erro ao exibir os posts'} )
    }
})


router.get('/adm/:id/edit', async (req, res) => {

    try {
        let post = await Post.findById(req.params.id)
        res.status(200).render('posts/put', { post })
    } catch (err) {
        res.status(500).render('pages/error', { err: 'Erro ao exibir a edição' })
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


router.put('/adm/:id', async (req, res) => {
    let {content} = req.body.post
    let post = await Post.findById(req.params.id)
    
    try {
        let post = await Post.findByIdAndUpdate(req.params.id, {content})
        
        res.redirect('/adm')
    } catch (err) {
        let erros = err.erros
        res.status(422).render('posts/put', {post: {...post, erros}})  
    }
})

router.delete('/adm/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.redirect('/adm')
    } catch (err) {
        res.status(422).render('posts/erro', {err: 'Erro ao remover o post'})  
    }
})

module.exports = router