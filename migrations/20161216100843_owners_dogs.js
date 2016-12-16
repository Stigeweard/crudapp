'use strict';

exports.up = knex =>
    knex.schema.createTable('owners_dogs', (table) => {
        table.increments();
        table.integer('owner_id').unsigned().references('owners.id').notNullable();
        table.integer('dog_id').unsigned().references('dogs.id').notNullable();
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('owners_dogs');
