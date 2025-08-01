module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 1rem = 16px ЗНАЧЕНИЕ ДУБЛИРОВАНО И ТАК ЖЕ ЕСТЬ В scss _variables !!!!
      rootValue: 16,
      // precision after comma
      unitPrecision: 6,
      // convert all
      propList: ['*'],
      exclude: [/node_modules/i, /src\/assets\/scss/i],
    },
  },
};
