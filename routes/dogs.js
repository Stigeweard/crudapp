const knex = require('../knex');
const express = require('express');
const router = express.Router();

router.get('/dogs', (req, res) => {
    knex('dogs').then((dogs) => {
        res.send(dogs.sort((a, b) => {
            return a.name > b.name;
        }));
    });
});

// get all dogs with owner $id
router.get('/dogs/owner/:id', (req, res) => {
    knex('dogs')
        .join('owners_dogs', 'dogs.id', '=', 'owners_dogs.dog_id')
        .join('owners', 'owners.id', '=', 'owners_dogs.owner_id')
        .where('owners.id', req.params.id)
        .then((dogs) => {
            res.send(dogs)
        })
})

router.get('/dogs/:id', (req, res) => {
    knex('dogs')
        .where('id', req.params.id)
        .then((dog) => {
            res.send(dog);
        });
});

router.post('/dogs', (req, res) => {
    knex('dogs')
        .insert({
            name: req.body.name,
            age: req.body.age,
            is_trained: req.body.is_trained,
            is_wirehaired: req.body.is_wirehaired
        }, '*')
        .then((dog) => {
            res.send(dog)
        })
});

router.delete('/dogs/:id', (req, res) => {
    knex('dogs')
        .where('id', req.params.id)
        .first()
        .then((dog) => {
            knex('dogs')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete dog.id
                    res.send(dog)
                });
        });
});

module.exports = router;
