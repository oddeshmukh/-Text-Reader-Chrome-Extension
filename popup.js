document.getElementById("read").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.TAB_ID_CURRENT }, // this is not valid
    func: () => {
      const text = window.getSelection().toString();
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  });
});
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => {
      const text = window.getSelection().toString();
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  });
});
