'use strict';

exports.up = knex =>
    knex.schema.createTable('dogs', (table) => {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.boolean('is_trained').notNullable().defaultTo(false);
        table.boolean('is_wirehaired').notNullable().defaultTo(false);
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('dogs');
