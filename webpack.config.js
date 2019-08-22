const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ThunderPlugin = require('@mtfe/thunder/plugin');

module.exports = {
	entry: {
		app: './src/ceshi/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ThunderPlugin({
			project: '3f03edb6',
			//模板注入配置
			injectHTML: {
			 //开发模板的绝对路径
			  template: path.resolve(__dirname, './dist/index.html'),
			  chunks:['app']
			},
			StarkOptions: {
			  // 项目在 Stark 管理平台上对应的 id
			  "projectName": "3f03edb6",
			  // webpack 编译出文件的所在目录
			  "dist": "dist",
			  uploadBlacklist: [ //不需要上传的文件名单
				"index\\.html"
			  ],
			},
		  })
	],
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist'),
		// 注意，682622b1需要更换为你在Stark管理界面中注册的项目的唯一标识符
		publicPath: 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:3f03edb6/'
	}
};
