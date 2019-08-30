chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('enabledOptions', data => {
    if (!data.enabledOptions) {
      chrome.storage.sync.set({ enabledOptions: [] });
    }
  });
  chrome.management.getSelf(ext => {
    console.log(`${ext.name} is now installed!`);
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher()],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'updateIcon') {
    console.log(msg);
    if (msg.value) {
      chrome.tabs.query({ url: msg.url }, tabs => {
        console.log(tabs);
        tabs.map(tab => {
          chrome.browserAction.setBadgeText({ text: '✓', tabId: tab.id });
          chrome.browserAction.setBadgeBackgroundColor({
            color: '#8cc640',
            tabId: tab.id,
          });
        });
      });
    } else {
        chrome.tabs.query({ url: msg.url }, tabs => {
            console.log(tabs);
            tabs.map(tab => {
              chrome.browserAction.setBadgeText({ text: 'X', tabId: tab.id });
              chrome.browserAction.setBadgeBackgroundColor({
                color: '#f44336',
                tabId: tab.id,
              });
            });
        });
    }
  }
});