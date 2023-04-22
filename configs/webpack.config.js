const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths.js');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
	mode: prod ? 'production' : 'development',
	entry: paths.input,
	context: paths.source,
	output: {
		path: paths.output,
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	},
	resolve: {
		alias: paths.alias,
		extensions: [
			'.tsx',
			'.ts',
			'.jsx',
			'.js',
		],
	},
	devtool: prod ? undefined : 'source-map',
	devServer: {
		static: {
			directory: paths.output,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: paths.template,
		}),
		new MiniCssExtractPlugin(),
	],
};
