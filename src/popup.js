var daily_url  = "https://my.redmine.jp/demo/boards/91/topics/new";
var weekly_url = "https://my.redmine.jp/demo/boards/92/topics/new";

$("#button_daily").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, {
            url: daily_url
        });
    });

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                text: "daily"
            });
        });
    });
});

$("#button_weekly").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, {
            url: weekly_url
        });
    });

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                text: "weekly"
            });
        });
    });
});
  