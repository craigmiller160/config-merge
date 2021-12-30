const merge = require('lodash.merge');

const configMerge = (...objects) =>
    objects.reduce((acc, obj) => merge(acc, obj), {});

module.exports = configMerge;
