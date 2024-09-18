const Post = require('../models/post')

const input = document.getElementById('pesquisa')

function listenner() {
   input.oninput = () => {
        Post.filter((item) => 
        item.toLowerCase().includes(input.value.toLowerCase())
        )
        .reduce((accum, item) => accum += item, [])
    
    }

}

module.exports = listenner