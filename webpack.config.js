module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'postcss-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'astroturf/loader'],
			}
		]
	}
}