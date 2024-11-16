// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

require('dotenv').config({
	path: path.join(process.cwd(), process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'),
})

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
	entry: './src/index.ts',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
		watchFiles: ['src/pages/*.html', 'src/images/*.svg'],
		hot: true,
		static: {
			directory: path.join(__dirname, 'dist'),
			publicPath: '/', // Указываем папку для статичных файлов
		},
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'dist/images'),
				},
			],
		}),

		new HtmlWebpackPlugin({
			template: 'src/pages/index.html',
		}),

		new MiniCssExtractPlugin(),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
		new DefinePlugin({
			'process.env.DEVELOPMENT': !isProduction,
			'process.env.API_ORIGIN': JSON.stringify(process.env.API_ORIGIN ?? ''),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				use: ['babel-loader', 'ts-loader'],
				exclude: ['/node_modules/'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					stylesHandler,
					'css-loader',
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: ['src/scss'],
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					keep_classnames: true,
					keep_fnames: true,
				},
			}),
		],
	},
}

module.exports = () => {
	if (isProduction) {
		config.mode = 'production'
	} else {
		config.mode = 'development'
	}
	return config
}
