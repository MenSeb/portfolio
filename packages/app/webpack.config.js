import * as path from 'path';
import * as url from 'url';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
};
