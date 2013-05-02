can.Model("CanJSUS.Plugin", {
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://api.bithub.com/api/events/?category=article|app|plugin&order=upvotes:desc&limit={limit}',
		dataType: 'json'
	}
}, { });