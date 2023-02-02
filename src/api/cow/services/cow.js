'use strict';

/**
 * cow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cow.cow');
