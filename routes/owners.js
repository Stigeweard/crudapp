const knex = require('../knex');
const express = require('express');
const router = express.Router();

router.get('/owners', (req, res) => {
    knex('owners').then((owners) => {
        res.send(owners.sort((a, b) => {
            return a.name > b.name;
        }));
    });
});

router.get('/owners/:id', (req, res) => {
    knex('owners')
        .where('id', req.params.id)
        .then((dog) => {
            res.send(dog);
        });
});

router.get('/owners/dog/:id', (req, res) => {
    knex('owners')
        .join('owners_dogs', 'owners.id', '=', 'owners_dogs.owner_id')
        .join('dogs', 'dogs.id', '=', 'owners_dogs.dog_id')
        .where('dogs.id', req.params.id)
        .then((dogs) => {
            res.send(dogs)
        })
})

router.post('/owners', (req, res) => {
    knex('owners')
        .insert({
            name: req.body.name,
            age: req.body.age
        }, '*')
        .then((dog) => {
            res.send(dog)
        })
});

router.delete('/owners/:id', (req, res) => {
    knex('owners')
        .where('id', req.params.id)
        .first()
        .then((owner) => {
            knex('owners')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete owner.id
                    res.send(owner)
                });
        });
});

module.exports = router;
