const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = require('./paths.js');

const prod = process.env.NODE_ENV === 'production';

const cssLoader = [
	MiniCssExtractPlugin.loader,
	{
		loader: 'css-loader',
		options: {
			sourceMap: true,
		},
	},
	{
		loader: 'postcss-loader',
		options: {
			postcssOptions: {
				plugins: [
					'postcss-preset-env',
				],
			},
			sourceMap: true,
		},
	},
	{
		loader: 'resolve-url-loader',
		options: {
			sourceMap: true,
		},
	},
];
const scssLoader = cssLoader.concat({
	loader: 'sass-loader',
	options: {
		sourceMap: true,
	},
});

const plugins = [
	new HtmlWebpackPlugin({
		template: paths.template,
	}),
	new MiniCssExtractPlugin(),
];

if (!prod) {
	const linters = [
		new ESLintPlugin({
			context: paths.root,
			overrideConfigFile: paths.eslintConfig,
			files: [
				'src/**/*.js',
				'src/**/*.ts',
				'src/**/*.tsx',
			],
			emitError: true,
			emitWarning: true,
			lintDirtyModulesOnly: true,
			failOnError: true,
			failOnWarning: true,
		}),
	];

	linters.forEach((linter) => plugins.push(linter));
}

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
				use: cssLoader,
			},
			{
				test: /\.scss$/,
				use: scssLoader,
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
	plugins,
};
