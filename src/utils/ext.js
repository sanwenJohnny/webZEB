Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i
  }
  return -1
}
Array.prototype.remove = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}
Array.prototype.hasEmpty = function () {
  for (var i = 0; i < this.length; i++) {
    if (typeof this[i] === 'undefined') return true
  }
  return false
}
String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}
String.prototype.startsWith = function (prefix) {
  return this.slice(0, prefix.length) === prefix
}
