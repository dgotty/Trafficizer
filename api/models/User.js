/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

  	username: {
  		type: 'string',
  		required: true
  	},

  	email: {
  		type: 'string',
  		required: true
  	},

    firstname: {
      type: 'string',
      required: true
    },

    lastname: {
      type: 'string',
      required: true
    },

    homeaddress: {
    	type: 'string',
    	required: true
    },

  	encryptedPassword: {
  		type: 'string'
  	}
  },

};
