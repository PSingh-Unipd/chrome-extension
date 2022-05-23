const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: "production",
	entry:  {
		bundle: './src/extension/app.ts',
		background: './src/background/background.ts'
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
			'.js' 
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
	optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }
}