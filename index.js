module.exports = function(obj, path) {
  var ref = obj;
  path.forEach(function(k) {
    if(!ref.hasOwnProperty(k)) {
      throw "No such key "+k;
    }
    ref = ref[k];
  });
  return ref;
}
