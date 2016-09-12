var background = {
	init: function(){
		chrome.runtime.onMessage.addListener(
		function(request,sender,sendResponce) {
				console.log("recieved", request);
				});
	}
}

background.init();