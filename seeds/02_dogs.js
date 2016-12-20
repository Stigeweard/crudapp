'use strict';

exports.seed = (knex) => {
    return knex('dogs').del()
        .then(() => {
            return knex('dogs').insert([
                {
                    name: 'Vi',
                    age: 2,
                    is_trained: true
                },
                {
                    name: 'Al',
                    age: 1,
                    is_trained: true,
                    is_wirehaired: true
                },
                {
                    name: 'Trump',
                    age: 12
                },
                {
                    name: 'Snuffles',
                    age: 5,
                    is_wirehaired: true
                }
            ])
        });
};
