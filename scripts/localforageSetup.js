import localforage from "localforage";
const serializer = {
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
      if (typeof value === 'string' && value.indexOf('function') === 0) {
        var functionTemplate = `(${value})`;
        return eval(functionTemplate);
      }
      return value;
    });
  }
};

// Configure localForage to use the custom serializer
localforage.config({
  driver: localforage.INDEXEDDB, // Use IndexedDB as the storage driver
  name: 'BattleCats', // Name of the database
  version: 1, // Database version
  storeName: 'cats', // Name of the object store
  serializer: serializer // Use the custom serializer
});
