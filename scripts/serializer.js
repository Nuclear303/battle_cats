export const serializer = {
  serialize: function(value) {
    return JSON.stringify(value, function(key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    });
  },
  deserialize: function(value) {
    return JSON.parse(value, function(key, value) {
      if (typeof value === 'string' &&( value.indexOf('function') === 0 || value.indexOf('=>') !== -1)) {
        var functionTemplate = `(${value})`;
        return eval(functionTemplate);
      }
      return value;
    });
  }
};