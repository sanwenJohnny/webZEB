self.onmessage = function (event) {
	var data = event.data;
	switch (data.type) {
		case 'TIME':
			var num = data.value;
			var T = setInterval(function () {
				if (num <= 0) {
					clearInterval(T);
					self.close();
				} else {
					self.postMessage({ type: data.type, value: --num });
				}
			}, 1000);
	}

}
