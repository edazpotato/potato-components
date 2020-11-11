const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
				loader: 'babel-loader',
				options: {
			presets: [
					[
						'@babel/preset-env',
						{
							modules: false
						}
					],
					'@babel/preset-react'
				]
		}
		}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	}
};

module.exports = config;