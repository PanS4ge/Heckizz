chrome.runtime.onInstalled.addListener(async () => {
    //let url = chrome.runtime.getURL("main.html");
    //let tab = await chrome.tabs.create({ url });
    //console.log(`Created tab ${tab.id}`);
});

chrome.webNavigation.onCompleted.addListener(async (url) => {
    //console.log(url)
});