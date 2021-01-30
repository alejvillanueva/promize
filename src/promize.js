const Promize = function (executor) {
  if (typeof executor !== 'function') {
    throw 'Pass me an executor pls';
  }
};

module.exports = Promize;
