const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{
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
	campaign: {
		id: {
			type: 'Number'
		},
		type: {
			type: 'String'
		},
		cached_slug: {
			type: 'Number'
		},
		tag_names: {
			type: [
				'String'
			]
		},
		origin_min_age: {
			type: 'Mixed'
		},
		origin_max_age: {
			type: 'Mixed'
		},
		new_customer: {
			type: 'Mixed'
		}
	},
	email: {
		type: 'String'
	},
	first_name: {
		type: 'Mixed'
	},
	last_name: {
		type: 'Mixed'
	},
	ip_address: {
		type: 'String'
	},
	sub_choice: {
		type: 'Boolean'
	},
	subscribed_at: {
		type: 'Date'
	},
	opted_in_at: {
		type: 'Date'
	},
	unsubscribed_at: {
		type: 'Mixed'
	}
}
	
);
module.exports = mongoose.models.friendSignup || mongoose.model('friendSignup', schema)
