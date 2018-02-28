var path = require("path");

module.exports = {
  entry: "./app/app.js", // входная точка - исходный файл
  //    resolve: {extensions: ['.js','.jsx']},
  output: {
    path: path.resolve(__dirname, "./public"), // путь к каталогу выходных файлов - папка public
    publicPath: "/public/",
    filename: "bundle.js" // название создаваемого файла
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["env", "react"], // используемые плагины
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=favicon.ico'  // <-- retain original file name
      }
    ]
  }
};
