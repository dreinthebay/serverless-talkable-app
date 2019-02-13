const mongoose = require('mongoose')
const schema = new mongoose.Schema(
	{
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
	share_type: {
		type: 'String'
	},
	share_info: {
		recipients: {
			type: [
				'String'
			]
		}
	},
	origin: {
		id: {
			type: 'Number'
		},
		type: {
			type: 'String'
		},
		email: {
			type: 'String'
		}
	}
}
);
module.exports = mongoose.models.share || mongoose.model('share', schema)
