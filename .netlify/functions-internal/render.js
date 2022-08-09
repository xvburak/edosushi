const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","icons8-checkmark.gif","icons8-ok.gif","icons8-okl.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		entry: {"file":"immutable/start-797c9741.js","imports":["immutable/start-797c9741.js","immutable/chunks/index-567b05ba.js","immutable/chunks/index-3d151600.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "boxcart",
				pattern: /^\/boxcart\/?$/,
				names: [],
				types: [],
				path: "/boxcart",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "cart1",
				pattern: /^\/cart1\/?$/,
				names: [],
				types: [],
				path: "/cart1",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "cart2",
				pattern: /^\/cart2\/?$/,
				names: [],
				types: [],
				path: "/cart2",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "cart3",
				pattern: /^\/cart3\/?$/,
				names: [],
				types: [],
				path: "/cart3",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "mobilecart",
				pattern: /^\/mobilecart\/?$/,
				names: [],
				types: [],
				path: "/mobilecart",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "setcart",
				pattern: /^\/setcart\/?$/,
				names: [],
				types: [],
				path: "/setcart",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/boxes.json",
				pattern: /^\/api\/boxes\.json$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/boxes.json.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
