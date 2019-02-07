const mongoose = require('mongoose')
const RewardSchema = new mongoose.Schema(
{
	person: {
		first_name: {
			type: 'String'
		},
		last_name: {
			type: 'String'
		},
		email: {
			type: 'String'
		},
		username: {
			type: 'String'
		},
		unsubscribed_at: {
			type: 'Mixed'
		},
		subscribed_at: {
			type: 'Date'
		},
		opted_in_at: {
			type: 'Date'
		},
		sub_choice: {
			type: 'Boolean'
		}
	},
	origin: {
		id: {
			type: 'Number'
		},
		type: {
			type: 'String'
		},
		order_number: {
			type: 'String'
		},
		subtotal: {
			type: 'String'
		},
		email: {
			type: 'String'
		},
		customer_id: {
			type: 'String'
		},
		ip_address: {
			type: 'String'
		},
		coupon_code: {
			type: 'String'
		}
	},
	friend_origin: {
		id: {
			type: 'Number'
		},
		type: {
			type: 'String'
		},
		order_number: {
			type: 'String'
		},
		subtotal: {
			type: 'String'
		},
		email: {
			type: 'String'
		},
		customer_id: {
			type: 'String'
		},
		ip_address: {
			type: 'String'
		},
		coupon_code: {
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
	advocate_origin: {
		id: {
			type: 'Number'
		},
		type: {
			type: 'String'
		},
		email: {
			type: 'String'
		},
		order_number: {
			type: 'String'
		},
		subtotal: {
			type: 'String'
		},
		customer_id: {
			type: 'String'
		},
		ip_address: {
			type: 'String'
		},
		coupon_code: {
			type: 'String'
		}
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
	reward: {
		id: {
			type: 'Number'
		},
		reason: {
			type: 'String'
		},
		incentive_type: {
			type: 'String'
		},
		incentive_description: {
			type: 'String'
		},
		incentive_custom_description: {
			type: 'Mixed'
		},
		amount: {
			type: 'String'
		},
		coupon: {
			code: {
				type: 'String'
			},
			active: {
				type: 'Boolean'
			},
			valid_until: {
				type: 'Mixed'
			},
			single_use: {
				type: 'Boolean'
			},
			used: {
				type: 'Boolean'
			},
			usages: {
				type: 'Mixed'
			},
			amount: {
				type: 'Number'
			},
			percentage_discount: {
				type: 'Mixed'
			},
			description: {
				type: 'Date'
			},
			id: {
				type: 'Number'
			},
			expires_at: {
				type: 'Mixed'
			}
		},
		coupon_code: {
			type: 'String'
		},
		status: {
			type: 'String'
		}
	}
});
module.exports = mongoose.models.Reward || mongoose.model('Reward', RewardSchema)
