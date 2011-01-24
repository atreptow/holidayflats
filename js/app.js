/**
 * 
 */
goog.provide('app');

goog.require('goog.array');
goog.require('goog.debug.Error');
goog.require('goog.dom');
goog.require('goog.net.Jsonp');

/**
 * 
 */
app.init = function() {
  load(app.create);
}

/**
 * 
 */
app.load = function(callback) {
  var jo = goog.net.Jsonp("json/basic.json");
  jo.send(null, function(o) {
    app.basic = o;
    callback();
  });
}

/**
 * 
 */
app.create = function() {
  
}

/**
 * 
 */
app.basic = null;