const http = require('http');

const rapidMethods = {
  get: function () {},
  post: function () {},
  patch: function () {},
  delete: function () {},
};
const rapid = http.createServer;

rapid.get = rapidMethods.get;
rapid.post = rapidMethods.post;
rapid.patch = rapidMethods.patch;
rapid.delete = rapidMethods.delete;

module.exports = rapid;
