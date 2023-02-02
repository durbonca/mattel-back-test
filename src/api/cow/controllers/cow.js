'use strict';

/**
 * cow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cow.cow');
