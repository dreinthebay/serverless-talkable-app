const mongoose = require('mongoose')
const AdvocateSignupSchema = new mongoose.Schema(
{
	campaign: {
		cached_slug: {
			type: 'Number'
		},
		id: {
			type: 'Number'
		},
		new_customer: {
			type: 'Mixed'
		},
		origin_max_age: {
			type: 'Mixed'
		},
		origin_min_age: {
			type: 'Mixed'
		},
		tag_names: {
			type: [
				'String'
			]
		},
		type: {
			type: 'String'
		}
	},
	email: {
		type: 'String'
	},
	first_name: {
		type: 'String'
	},
	gender: {
		type: 'Mixed'
	},
	last_name: {
		type: 'String'
	},
	offer: {
		email: {
			type: 'String'
		},
		short_url_code: {
			type: 'String'
		},
		ip_address: {
			type: 'String'
		}
	},
	opted_in_at: {
		type: 'Mixed'
	},
	sub_choice: {
		type: 'Boolean'
	},
	subscribed_at: {
		type: 'Mixed'
	},
	unsubscribed_at: {
		type: 'Mixed'
	}
}
);
module.exports = mongoose.models.AdvocateSignup || mongoose.model('AdvocateSignup', AdvocateSignupSchema)
