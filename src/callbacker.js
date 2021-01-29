const syncCallbacker = function (funcOne, funcTwo, ...funcs) {
  if (typeof funcOne !== 'function' || typeof funcTwo !== 'function') {
    throw 'You need to feed me functions';
  }

  let results = funcTwo(funcOne());

  if (funcs.length) {
    const areAllFuncs = funcs.every((func) => typeof func === 'function');
    if (!areAllFuncs) {
      throw 'Something is a NOT a function';
    }

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

  /*
  let areAllFuncs = funcs.every((func) => typeof func === 'function');
    if (!areAllFuncs) {
      throw 'Something is a function';
    }
  */
};

module.exports = { syncCallbacker, asyncCallbacker };
