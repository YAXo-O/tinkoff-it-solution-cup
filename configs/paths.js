const path = require('path');

const root = path.resolve(__dirname, '../');
const src = path.resolve(root, './src');
const build = path.resolve(root, './build');

module.exports = {
	template: path.resolve(root, './public/index.html'),
	source: src,
	input: path.resolve(src, './index.tsx'),
	output: build,
	alias: {
		'@app': src,
		'@styles': path.resolve(src, './styles'),
	},
};
