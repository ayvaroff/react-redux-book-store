const merge = require('webpack-merge')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./base.config.js')

const folderName = 'dist'

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, `../${folderName}`),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                indentType: 'spaces',
                indentWidth: 1,
                includePaths: [
                  path.join(__dirname, 'node_modules'),
                ]
              },
            }
          ]
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/images/',
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/fonts/',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([folderName], { root: path.resolve(__dirname, '..'), verbose: true }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ],
})
