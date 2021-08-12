(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { label: 'label', value: 'value', indexable: false };

  nx.list2kv = function (inArray, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    return inArray.map(function (item, index) {
      var target = {};
      var label = item;
      var value = options.indexable ? index : item;
      target[options.label] = label;
      target[options.value] = value;
      return target;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.list2kv;
  }
})();
