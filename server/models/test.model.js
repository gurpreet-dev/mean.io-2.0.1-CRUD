import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Post Schema
 */
const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
TestSchema.method({
});

/**
 * Statics
 */
TestSchema.statics = {};

/**
 * @typedef Post
 */
export default mongoose.model('Test', TestSchema);
