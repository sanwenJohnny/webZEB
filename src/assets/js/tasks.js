
;(function (root) {
  var __time = 'TIME'
  if (Worker) {
    var w = new Worker('./workers.js')

    var HqbsWorkers = {
      timeCounter: function (counter, fn, done) {
        w.postMessage({type: __time, value: counter})
        w.onmessage = function (event) {
          if (event.data.value <= 0) {
              done && done.call()
            } else {
              fn && fn.call(null, event.data.value)
            }
        }
      }
    }
    root.HqbsWorkers = HqbsWorkers
  }
})(window)
