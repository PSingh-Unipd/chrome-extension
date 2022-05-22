const path = require('path');

module.exports = {
	mode: "production",
	entry:  {
		bundle: './src/app.ts',
		background: './src/background.ts'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: [
					path.resolve(__dirname, 'src')
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.ts',
			'.js' // Not really necessary in this case
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
}