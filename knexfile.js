module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/vizslameet_dev'
    },

    test: {
        client: 'pg',
        connection: 'postgres://localhost/vizslameet_test'
    }
};
