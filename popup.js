//var console = chrome.extension.getBackgroundPage().console;
console.log("hello");
var cacheBtnID = "ct";
var tabs = [];

function pushToArray(tabSeq){
	for (var tab of tabSeq) {arrayOfTabs.prototype.push(tab);}
		return arrayOfTabs;
};
function currentWindowTabs(){ 
var windowTabs = [];
chrome.tabs.query({currentWindow:true},function (argument) {
		for (var tab of argument) {windowTabs.push(tab)};
}); 
return windowTabs;
};

function currentTabOfWindow() {
	var windowTabs = [];
	chrome.tabs.query({currentWindow:true,pinned:false,active:true},
		function (argument) {
			for (var tab of argument) {
				windowTabs.push(tab)
			};
}); 
return windowTabs;
};

function createFolder(parent,title){
chrome.bookmarks.create({'parentId':parent,
							'title':title},
							function(bookmarkFolder) {
								console.log("Folder added: ", bookmarkFolder.title);
							});

};
var bookmarkFolderTree;

function getRootFolderTree() {
	var barTree = [];
	  chrome.bookmarks.get("1",function(args){
	  	barTree.push(args);

	  });
	  return barTree;
}
function bookmarkTree() {
	 var tree =[];
	 chrome.bookmarks.getTree(function(treeNodes){
	 	console.log(treeNodes);
	 	tree.push(treeNodes);
	 });
	 return tree;
}
var bar =[];
var tree = [];
var rootTitle = "CashTabs";

document.addEventListener("DOMContentLoaded",function(dcle) {
btn = document.getElementById(cacheBtnID);
btn.addEventListener('click',function(ce){
				tabs = currentWindowTabs();
				console.log(tabs);
				createFolder("1",rootTitle);
});
});
