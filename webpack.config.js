var path = require('path');

module.exports = {
  entry: './index.js', // входная точка - исходный файл
  //    resolve: {extensions: ['.js','.jsx']},
  output: {
    path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: 'bundle.js' // название создаваемого файла
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // определяем загрузчик
        options: {
          presets: ['env', 'react'], // используемые плагины
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=favicon.ico' // <-- retain original file name
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'app/actions/'),
      dbApi: path.resolve(__dirname, 'app/dbApi/'),
      components: path.resolve(__dirname, 'app/components/'),
      config: path.resolve(__dirname, 'config/'),
      containers: path.resolve(__dirname, 'app/containers/'),
      constants: path.resolve(__dirname, 'constants/'),
      helpers: path.resolve(__dirname, 'app/helpers/'),
      utilities: path.resolve(__dirname, 'app/components/utilities'),
      table: path.resolve(__dirname, 'app/components/table'),
      sessions: path.resolve(__dirname, 'app/components/sessions'),
    }
  }
};
