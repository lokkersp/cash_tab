var opened = [];
chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
	tabs.forEach(function(tab) {
		var tabTitle = tab.title;
		var tabUrl = tab.url;
		opened.push(tabTitle, tabUrl);
		console.log(tabTitle,tabUrl);
	});
});