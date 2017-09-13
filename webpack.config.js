const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const javascript = {
	test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
	use: [
		{
			loader: 'babel-loader',
			options: { presets: ['es2015'] }, // this is one way of passing options
		},
	],
};

const postcss = {
	loader: 'postcss-loader',
	options: {
		plugins() {
			return [autoprefixer({ browsers: 'last 3 versions' })];
		},
		sourceMap: true,
	},
};

const styles = {
	test: /\.(scss)$/,
	// here we pass the options as query params b/c it's short.
	// remember above we used an object for each loader instead of just a string?
	// We don't just pass an array of loaders, we run them through the extract plugin so they can be outputted to their own .css file
	use: ExtractTextPlugin.extract(['css-loader?sourceMap', postcss, 'sass-loader?sourceMap']),
};

const config = {
	entry: {
		main: './public/javascript/index.js',
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './',
		hot: true,
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [javascript, styles],
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
	],
};

process.noDeprecation = true;

module.exports = config;
