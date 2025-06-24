const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      main: './src/index.js',
      setting: './src/setting.js',
      services: './src/services.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[name].[hash][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[hash][ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      
      // HTML files
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['main'],
        inject: 'body',
        minify: false
      }),
      
      new HtmlWebpackPlugin({
        template: './services.html',
        filename: 'services.html',
        chunks: ['services'],
        inject: 'body',
        minify: false
      }),
      
      new HtmlWebpackPlugin({
        template: './setting.html',
        filename: 'setting.html',
        chunks: ['main', 'setting'],
        inject: 'body',
        minify: false
      }),

      // Copy static assets
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'assets/img',
            to: 'assets/img'
          }
        ]
      }),

      // Extract CSS in production
      ...(isProduction ? [new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      })] : [])
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      hot: true,
      open: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      extensions: ['.js', '.css']
    }
  };
}; 