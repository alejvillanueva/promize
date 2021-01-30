const basicPromise = new Promise(function (resolve, reject) {
  resolve('basicPromise');
});

const funcPromise = () => {
  return new Promise((resolve) => {
    resolve('funcPromise');
  });
};

const chainedPromise = (prom) => {
  if (prom) {
    let res = prom().then((res) => {
      return res;
    });
    return new Promise((resolve) => {
      resolve(res);
    });
  }
};
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('rejectedPromise'));
  });
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
