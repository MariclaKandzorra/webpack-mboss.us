const path = require('path');
const comm = require('./webpack.comm');
const { merge } = require('webpack-merge');



module.exports = merge(comm, {
    mode: 'production', //production
	// src
    // dist
	output: {
		filename: '[name].js?[fullhash]',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		assetModuleFilename: 'assets/img/[name]?[fullhash]',
		clean: true,
    },
	// Optimizations
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}, 
	//developmentServer = npm run dev
	devtool: 'inline-source-map',
	devServer:{
		static: '../mboss-us/public',
		port: 5001, //default 8080
		open: true,
		hot: true,
	},
	//loaders, test = npm run build
	//plugins
});
