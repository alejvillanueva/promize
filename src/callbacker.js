const syncCallbacker = function (funcOne, funcTwo, ...funcs) {
  if (typeof funcOne !== 'function' || typeof funcTwo !== 'function') {
    throw 'You need to feed me functions';
  }

  let results = funcTwo(funcOne());

  if (funcs.length) {
    results = funcs.reduce((acc, currFunc) => {
      return currFunc(acc);
    }, results);
  }

  return results;
};

const asyncCallbacker = function (funcOne, funcTwo, ...funcs) {
  if (typeof funcOne !== 'function' || typeof funcTwo !== 'function') {
    throw 'You need to feed me functions';
  }
};

module.exports = { syncCallbacker, asyncCallbacker };
