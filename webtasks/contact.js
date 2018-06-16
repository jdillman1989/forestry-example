// https://wt-9a9836193ef80b974d75acd701bbf74e-0.sandbox.auth0-extend.com/contact

var _ = require('lodash');

const RESPONSE = {
	OK : {
		status : "ok",
		message: "Thank you for your interest.",
	},
	ERROR : {
		status : "error",
		message: "Something went wrong. Please try again."
	}
};

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

module.exports = function(context, cb){
	var email = context.body.email;

	if(email && validateEmail(email)){
		context.storage.get(function(err, data){
			if(err){
				cb(null, RESPONSE.ERROR);
			}
			data = data || [];

			var newData = {
				email: email,
				name: context.body.name,
				message: context.body.message,
				subject: context.body.subject
			}

			data.push(newData);
			context.storage.set(data, function(err){
				if(err){
					cb(null, RESPONSE.ERROR);
				} 
				else {
					cb(null, RESPONSE.OK);
				}
			})
		})
	} 
	else {
		cb(null, RESPONSE.ERROR);
	}
};