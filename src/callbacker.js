const areAllFuncs = (funcs) => {
  return funcs.every((func) => typeof func === 'function');
};

const syncCallbacker = function (funcOne, funcTwo, ...funcs) {
  if (typeof funcOne !== 'function' || typeof funcTwo !== 'function') {
    throw 'You need to feed me functions';
  }

  let results = funcTwo(funcOne());

  if (funcs.length) {
    if (!areAllFuncs(funcs)) {
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

  funcOne((data = funcTwo), (res) => {
    if (typeof data !== 'function') {
      return data;
    } else {
      data(res, () => {
        return res;
      });
    }
  });
};

// return results;

module.exports = { syncCallbacker, asyncCallbacker };
