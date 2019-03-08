module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 32,//结果为：设计稿元素尺寸/值，比如元素宽750px,
      propList: ['*'],
      minPixelValue: 2
    }
  }
};
