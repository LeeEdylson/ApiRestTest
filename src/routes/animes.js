const { Router } = require("express");
const { each } = require("underscore");
const router = Router();
const _ = require('underscore');

const animes = require('../sample.json');
console.log(animes);

router.get('/', (req, res) => {
    res.json(animes);
})

router.post('/', (req, res) => {
    const { titulo, escritor,publicacion} = req.body;
    if ( titulo && escritor && publicacion) {
        const id = animes.length + 1;
        const newAnime = {...req.body, id};
        animes.push(newAnime);
        res.json(animes);
    }else{
        res.status(400).json({error: 'Hubo un error.'});
    }
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { titulo, escritor,publicacion} = req.body;
    if (titulo && escritor && publicacion){
        _,each(animes, (anime, i) => {
            if(anime.id == id) {
                anime.titulo = titulo;
                anime.escritor = escritor;
                anime.publicacion = publicacion;
            }
        });
        res.json(animes);
    } else {
        res.status(400).json({error: 'Hubo un error.'});
    }
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    _.each(animes, (anime, i) => {
        if(anime.id == id) {
            animes.splice(i, 1);
        }
    });
    res.send(animes);
})

module.exports = router;