'use strict';

exports.seed = (knex) => {
    return knex('owners').del()
        .then(() => {
            return knex('owners').insert([
                {
                    name: 'Chuckles',
                    age: 27
                },
                {
                    name: 'Joey',
                    age: 29
                },
                {
                    name: 'Jerry',
                    age: 52
                },
                {
                    name: 'Mandy',
                    age: 23
                },
                {
                    name: 'Robin',
                    age: 44
                }
            ])
        });
};
