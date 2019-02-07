const mongoose = require('mongoose')
const ReferralSchema = new mongoose.Schema(
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
	referrer: {
		id: {
			type: 'Number'
		},
		email: {
			type: 'String'
		},
		person: {
			email: {
				type: 'String'
			},
			first_name: {
				type: 'String'
			},
			last_name: {
				type: 'String'
			},
			sub_choice: {
				type: 'Boolean'
			},
			subscribed_at: {
				type: 'Mixed'
			},
			opted_in_at: {
				type: 'Mixed'
			},
			unsubscribed_at: {
				type: 'Mixed'
			}
		},
		amount: {
			type: 'String'
		},
		incentive: {
			type: 'String'
		},
		incentive_description: {
			type: 'String'
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
			},
			customer_id: {
				type: 'String'
			},
			ip_address: {
				type: 'String'
			}
		}
	},
	referred: {
		id: {
			type: 'Number'
		},
		email: {
			type: 'String'
		},
		person: {
			email: {
				type: 'String'
			},
			first_name: {
				type: 'String'
			},
			last_name: {
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
		},
		amount: {
			type: 'String'
		},
		incentive: {
			type: 'String'
		},
		incentive_description: {
			type: 'String'
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
				type: 'Number'
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
		}
	},
	advocate_rewards: {
		type: [
			'Mixed'
		]
	},
	friend_rewards: {
		type: [
			'Mixed'
		]
	},
	referred_origin: {
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
			type: 'Number'
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
	}
}
);
module.exports = mongoose.models.Referral || mongoose.model('Referral', ReferralSchema)
