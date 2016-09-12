var ext_title_bookmarks = "CashTab";

function bookmarkFolderExist(folderTitle){
	var bookmarkFolder;
	chrome.bookmarks.get(folderTitle,function(folder) {
		 
	});
}
function createFolder(parent,title){
if(!bookmarkFolderExist()){
	chrome.bookmarks.create({'parentId':parent.id,
							'title':title},
							function(bookmarkFolder) {
								console.log("Folder added: " bookmarkFolder.title);
							});
}
}