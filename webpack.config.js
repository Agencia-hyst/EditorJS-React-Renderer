const path = require('path'),
	TerserPlugin = require('terser-webpack-plugin'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.normalize(`${__dirname}/index.jsx`),
	output: {
		path: path.normalize(`${__dirname}/dist`),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				terserOptions: {
					ecma: 6,
				}
			}),
		]
	}
};
