'use strict';

exports.up = knex =>
    knex.schema.createTable('owners', (table) => {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('owners');
