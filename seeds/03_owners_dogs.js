'use strict';

exports.seed = (knex) => {
    return knex('owners_dogs').del()
        .then(() => {
            return knex('owners_dogs').insert([
                {
                    owner_id: 1,
                    dog_id: 2
                },
                {
                    owner_id: 1,
                    dog_id: 1
                },
                {
                    owner_id: 5,
                    dog_id: 2
                },
                {
                    owner_id: 4,
                    dog_id: 4
                },
                {
                    owner_id: 3,
                    dog_id: 3
                },
                {
                    owner_id: 2,
                    dog_id: 2
                }
            ])
        });
};
