import Vue from "vue";

var req = require.context("../filters", false, /\.js$/);
req.keys().forEach(key => {
  const filters = req(key);
  const filterNames = Object.getOwnPropertyNames(filters).filter(
    name => name !== "__esModule"
  );
  filterNames.forEach(filterName => {
    Vue.filter(filterName, filters[filterName]);
  });
});
