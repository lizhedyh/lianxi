const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ThunderPlugin = require('@mtfe/thunder/plugin');

module.exports = {
	entry: {
		app: './src/index.js'
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
				use:['style-loader','css-loader'],
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader'],
      }
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// 注意，682622b1需要更换为你在Stark管理界面中注册的项目的唯一标识符
		// publicPath: 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:3f03edb6/'
	}
};
