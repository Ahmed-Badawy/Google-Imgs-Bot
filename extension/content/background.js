chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': 'https://www.google.com.eg/search?newwindow=1&tbm=isch&q=undefined&active=true', 'selected': true});
});